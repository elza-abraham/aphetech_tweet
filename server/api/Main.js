const router = require('express').Router()
const {Tweet, User} = require('../db')

//async await method
router.get('/feed', async (req, res, next) => {
  try {
    const tweets = await Tweet.findAll({
      where: {
        userId: '1'
      },
      // include: [
      //   {model: User}
      // ],
      order: [[
        'createdAt', 'DESC'
      ]]
    })
    res.json(tweets)
  } catch (err) {
    next(err)
  }
})

router.get('/profile', async (req, res, next) => {
  try {
    const user = await User.findOne({
      include: [{
        model: User,
        as: 'follower'
      }, {
        model: User,
        as: 'following'
      }],
      where: { id: 1 }
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
    await tweet.setUser(1)
    const newTweet = await Tweet.findById(tweetId)
    res.json(newTweet)
  } catch (err) {
    next(err)
  }
})
module.exports = router
