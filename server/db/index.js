const db = require('./db')
const Tweet = require('./tweet')
// const User = require('./user')

// Tweet.belongsTo(User)
// User.hasMany(Tweet)

module.exports = {
  db,
  Tweet,
  // User
}
