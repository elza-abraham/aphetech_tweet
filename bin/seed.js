const {db, Tweet, User} = require('../server/db')

const seed = async () => {
  await db.sync({force: true})

const users = await Promise.all([
  User.create({
    name: 'First - John Smith ',
    handle: 'FirstHandle',
    imgUrl: 'https://www.tcd.ie/provost/assets/img/officers/blank-profile.jpg'
  }),
  User.create({
    name: 'Second',
    handle: 'SecondHandle'
  }),
  User.create({
    name: 'Third',
    handle: 'ThirdHandle'
  }),
  User.create({
    name: 'Fourth',
    handle: 'FourthHandle'
  })
])

const tweets = await Promise.all([
  Tweet.create({
    tweet: 'First Tweet - A quick brown fox',
    userId: 1
  }),
  Tweet.create({
    tweet: 'Second Tweet - A slow red fox',
    userId: 1
  }),
  Tweet.create({
    tweet: 'third Tweet - A quick red bear',
    userId: 2
  }),
  Tweet.create({
    tweet: 'fourth Tweet - A fast brown fox',
    userId: 3
  })
])

db.close()
console.log(`

    Seeding successful!
    Time to do stuff!

  `)
}

seed().catch(err => {
  db.close()
  console.log(`

    Error seeding:

    ${err.message}

    ${err.stack}

  `)
})
