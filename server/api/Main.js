const router = require('express').Router()
const {Tweet, User} = require('../db')
const getSession  = require('./getSession')

const currUserId  = getSession()

router.get('/feed', async (req, res, next) => {
  try {
    const followingUsers = await User.find({
      include: [{
        model: User,
        as: 'follower'
      }],
      where: { id: currUserId }
    })

    let followerId = followingUsers.follower.map(function(f){
      return f.id
    })
    followerId = [...followerId, currUserId]

    const tweets = await Tweet.findAll({
      include: [
        {model: User}
      ],
      order: [[
        'createdAt', 'DESC'
      ]],
      where: {
        userId:
        {$in: followerId}
      }
    })
    res.json(tweets)
  } catch (err) {
    next(err)
  }
})

router.get('/profile', async (req, res, next) => {
  try {
    const user = await User.find({
      include: [{
        model: User,
        as: 'following'
      }, {
        model: User,
        as: 'follower'
      }, {
        model: Tweet
      }],
      where: { id: currUserId }
    })
    res.json(user)
  } catch (err) {
    next(err)
  }
})
// router.get('/profile', async (req, res, next) => {
//   try {
//     const user = await User.findById(1)
//     res.json(user)
//   } catch (err) {
//     next(err)
//   }
// })

// router.get('/profile', (req, res, next) => {
//   User.findAll()
//     .then(tweets => res.json(tweets))
//     .catch(next)
// })


router.post('/', async (req, res, next) => {
  try {
    const tweet = await Tweet.create(req.body)
    const tweetId = tweet.id
    await tweet.setUser(currUserId)
    const newTweet = await Tweet.findById(tweetId)
    res.json(newTweet)
  } catch (err) {
    next(err)
  }
})
module.exports = router
