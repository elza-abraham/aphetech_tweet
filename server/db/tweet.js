const Sequelize = require('sequelize')
const db = require('./db')

const Tweet = db.define('tweet', {
  tweet: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Tweet
