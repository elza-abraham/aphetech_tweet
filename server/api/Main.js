const router = require('express').Router()
const {Tweet} = require('../db')

router.get('/', (req, res, next) => {
  Tweet.findAll({
    order: [['createdAt', 'DESC']],
  })
    .then(tweets => res.json(tweets))
    .catch(next)
})

router.post('/', async (req, res, next) => {
  try {
    const tweet = await Tweet.create(req.body)
    const tweetId = tweet.id

    const newTweet = await Tweet.findById(tweetId)
    res.json(newTweet)
  } catch (err) {
    next(err)
  }
})
module.exports = router
