const db = require('./db')
const Tweet = require('./tweet')
const User = require('./user')

//table associations

Tweet.belongsTo(User)
User.hasMany(Tweet)

User.belongsToMany(User, { as: 'children', foreignKey: 'followId', through: 'follow' });
User.belongsToMany(User, { as: 'parents', foreignKey: 'followerId', through: 'follow' });

module.exports = {
  db,
  Tweet,
  User
}
