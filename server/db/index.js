const db = require('./db')
const Tweet = require('./tweet')
const User = require('./user')

//table associations

Tweet.belongsTo(User)
User.hasMany(Tweet)

module.exports = {
  db,
  Tweet,
  User
}
