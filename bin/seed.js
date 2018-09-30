#!/usr/bin/env node

const {db, Tweet, User} = require('../server/db')

const seed = async () => {
  await db.sync({force: true})

const users = await Promise.all([
  User.create({
    name: 'First ',
    handle: 'FirstHandle'
  }),
  User.create({
    name: 'Second',
    handle: 'SecondHandle'
  })
])

const tweets = await Promise.all([
  Tweet.create({
    tweet: 'First Tweet',
    userId: 1
  }),
  Tweet.create({
    tweet: 'Second Tweet',
    userId: 1
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
