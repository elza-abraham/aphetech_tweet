#!/usr/bin/env node

const {db, Tweet} = require('../server/db')

const seed = async () => {
  await db.sync({force: true})

  await Tweet.create({
    tweet: 'First tweet'
  })

  await Tweet.create({
    tweet: 'Second Tweet'
  })

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
