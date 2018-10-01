const db = require('./db')
const Tweet = require('./tweet')
const User = require('./user')

//table associations

Tweet.belongsTo(User)
User.hasMany(Tweet)

User.belongsToMany(User, { as: 'follower', foreignKey: 'followerId', through: 'follow' });
User.belongsToMany(User, { as: 'following', foreignKey: 'followingId', through: 'follow' });

module.exports = {
  db,
  Tweet,
  User
}
