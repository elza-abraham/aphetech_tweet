const {db, Tweet, User} = require('../server/db')

const seed = async () => {
  await db.sync({force: true})

const users = await Promise.all([
  User.create({
    name: 'Jo Smith',
    handle: 'jsmith',
    imgUrl: 'https://www.tcd.ie/provost/assets/img/officers/blank-profile.jpg'
  }),
  User.create({
    name: 'Denzel Washington',
    handle: 'dwashington'
  }),
  User.create({
    name: 'Tom Hanks',
    handle: 'thanks'
  }),
  User.create({
    name: 'Will Smith',
    handle: 'wsmith'
  }),
  User.create({
    name: 'George Clooney',
    handle: 'gclooney'
  }),
  User.create({
    name: 'Meryl Streep',
    handle: 'mstreep'
  }),
  User.create({
    name: 'Anne Hatheway',
    handle: 'ahatheway'
  })
])

const tweets = await Promise.all([
  Tweet.create({
    tweet: 'Jo-1 First Tweet - A quick brown fox',
    userId: 1
  }),
  Tweet.create({
    tweet: 'Second Tweet - A slow red fox',
    userId: 1
  }),
  Tweet.create({
    tweet: 'Denzel-2 First Tweet - A quick red bear',
    userId: 2
  }),
  Tweet.create({
    tweet: 'Tom-3 first Tweet - A fast brown fox',
    userId: 3
  }),
  Tweet.create({
    tweet: 'George-5 first Tweet - A jumpy pink rabbit',
    userId: 5
  }),
  Tweet.create({
    tweet: 'Anne-7 first Tweet - A slothy tan sloth',
    userId: 7
  }),
  Tweet.create({
    tweet: 'Anne-7 second Tweet - Another slothy tan sloth',
    userId: 7
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
