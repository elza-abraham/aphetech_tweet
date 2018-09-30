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
      user: {}
    }
  }

  async componentDidMount () {
    const resTweet = await axios.get('/api/main/feed');
    //user data also can be included here.
    //console.log(res.data[0].user)

    const resUser = await axios.get('/api/main/profile')
    this.setState({
      tweets: resTweet.data,
      user: resUser.data
    });
  }

  addTweet = (tweet) => {
    let tweetsTemp = this.state.tweets;
    tweetsTemp.unshift(tweet)
    this.setState({
      tweets: tweetsTemp
    });
  }

  getTweetCount = () => {
    return this.state.tweets.length
  }

  render () {
    return (
      <div>
        <Profile user ={this.state.user}  tweetCount = {this.getTweetCount()} />
        <AddTweet addTweet={this.addTweet} />
        {
          this.state.tweets.map(tweet => <Tweet tweet={tweet} key={tweet.id} />)
        }
      </div>
    );
  }
}
