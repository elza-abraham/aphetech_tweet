import React, {Component} from 'react';
import axios from 'axios';
import Tweet from './Tweet'
import AddTweet from './AddTweet'

export default class MainPage extends Component {
  constructor () {
    super()
    this.state = {
      tweets: []
    }
  }

  async componentDidMount () {
    const res = await axios.get('/api/Main');
    this.setState({tweets: res.data});
  }

  addTweet = (tweet) => {
    let tweetsTemp = this.state.tweets;
    tweetsTemp.unshift(tweet)
    this.setState({
      tweets: tweetsTemp
    });
  }

  render () {
    return (
      <div>
        {/* Profile Component */}
        <AddTweet addTweet={this.addTweet} />
        {
          this.state.tweets.map(tweet => <Tweet tweet={tweet} key={tweet.id} />)
        }
      </div>
    );
  }
}
