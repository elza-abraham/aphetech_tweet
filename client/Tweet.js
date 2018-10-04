import React from 'react'
import moment from 'moment' // for date format

const Tweet = (props) => {
  const tweet = props.tweet
  //tweets with user included
  return (
    <div key={tweet.id}>
      <div className = "single-tweet">
        <h5><i>{tweet.user && tweet.user.name }{' '}{moment(tweet.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</i></h5>
        <p>{tweet.tweet}</p>
      </div>
    </div>
  )
}

export default Tweet
