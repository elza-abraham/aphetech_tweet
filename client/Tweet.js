import React from 'react'
import moment from 'moment'

const Tweet = (props) => {
  const tweet = props.tweet

  return (
    <div key={tweet.id}>
      <div>
        <h5><i>{moment(tweet.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</i></h5>
        <p>{tweet.tweet}</p>
      </div>
    </div>
  )
}

export default Tweet
