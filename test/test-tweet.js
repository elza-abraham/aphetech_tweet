const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const {db, Tweet} = require('../server/db/index')

const expect = chai.expect
chai.use(chaiAsPromised)

describe('Tweet model', () => {
  before(() => {
    return db.sync({force: true})
  })

  it('should accept a tweet of 255 or less chars only', async() => {

    const tweetText = `The breed is often described by the Latin phrase multum in parvo, or "much in little" or "a lot of dog in a small space", alluding to the Pug's remarkable and charming personality, despite its small size. Pugs are strong willed but rarely aggressive, and are suitable for families with children. The majority of the breed is very fond of children and sturdy enough to properly play with them. Depending on their owner's mood, they can be quiet and docile but also vivacious and teasing. Pugs tend to be intuitive and sensitive to the moods of their owners and are usually eager to please them. Pugs are playful and thrive on human companionship. They also tend to have a snoozy nature and spend a lot of time napping. Pugs are often called "shadows" because they follow their owners around and like to stay close to the action, craving attention and affection from their owners.`

    await expect(Tweet.create({tweet: tweetText})).to.be.rejected
  })

  it('`tweet` can hold a longer string', async () => {
    const tweetText = `The breed is often`

    const tweet = await Tweet.create({tweet: tweetText})
    expect(tweet.tweet).to.equal(tweetText)
  })

})
