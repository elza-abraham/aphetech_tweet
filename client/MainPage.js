import React, {Component} from 'react';
import axios from 'axios';
import Tweet from './Tweet'
import Profile from './Profile'
import AddTweet from './AddTweet'

export default class MainPage extends Component {
  constructor () {
    super()
    this.state = {
      tweets: [],
      user: {},
      userTweetLength: 0
    }
  }

  async componentDidMount () {
    //AJAX call to get tweets of user and people whom he/she is following
    const resTweet = await axios.get('/api/main/feed');

    //AJAX call to get profile with included tweets of user only
    const resUser = await axios.get('/api/main/profile')

    this.setState({
      tweets: resTweet.data,
      userTweetLength: resUser.data.tweets.length,
      user: resUser.data
    });
  }

  addTweet = (tweet) => {
    let tweetsTemp = this.state.tweets;
    tweetsTemp.unshift(tweet)
    this.setState({
      tweets: tweetsTemp,
      userTweetLength:  this.state.userTweetLength + 1
    });
  }

  getTweetCount = () => {
    return this.state.tweets.length
  }

  render () {
    return (
      <div id="main">
        <Profile user ={this.state.user} userTweetLength = {this.state.userTweetLength} tweetCount = {this.getTweetCount()} />
        <div id = "tweet">
          <AddTweet addTweet={this.addTweet} />
          {
            //separate component for each tweet later if we want to handle(expand, delete) each tweets
            this.state.tweets.map(tweet => <Tweet tweet={tweet} key={tweet.id} />)
          }
        </div>
      </div>
    );
  }
}
