import React from 'react'
import moment from 'moment'

const Tweet = (props) => {
  const tweet = props.tweet

  return (
    <div key={tweet.id}>
      <div>
          <h3>{tweet.tweet}</h3>
          <p>{moment(tweet.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
      </div>
    </div>
  )
}

export default Tweet
