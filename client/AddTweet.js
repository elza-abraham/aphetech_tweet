import React, {Component} from 'react'
import axios from 'axios'
import TweetForm from './TweetForm'

export default class AddTweet extends Component {
  constructor(){
    super()
    this.state = {
      tweet: '',
      errorMessage: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post('/api/main', this.state)
      this.props.addTweet(res.data);// a method passed down from parent MainPage
      this.setState({
        tweet: '',
        errorMessage: ''
      });
    }
    catch (error) {
      this.setState({errorMessage: error.message})
    }

  }
  render () {
    return (
      <TweetForm {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
    )
  }
}
