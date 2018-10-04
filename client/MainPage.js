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
    }
  }

  getAllTweets = async () => {
    const resTweet = await axios.get('/api/main/feed');
    return resTweet.data;
  }

  async componentDidMount () {
    //AJAX call to get tweets of user and people whom he/she is following
    const tweets = await this.getAllTweets()

    //AJAX call to get current user profile with included tweets of user only
    const resUser = await axios.get('/api/main/profile')

    this.setState({
      tweets: tweets,
      user: resUser.data
    });
  }

  addTweet = async (tweet) => {
    const tweets = await this.getAllTweets()

    this.setState({
      tweets: tweets,
      user: {...this.state.user, tweets: [...this.state.user.tweets, tweet]},
    });
  }

  render () {
    return (
      <div id="main">
        <Profile user ={this.state.user} />
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
