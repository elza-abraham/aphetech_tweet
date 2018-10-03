import React from 'react'

const TweetForm = (props) => {
  return (
    <div>
      <form onSubmit= {props.handleSubmit}>
        <div className = "tweet-form">
          <textarea  placeholder="What's happening?" maxLength = "255" name="tweet" onChange={props.handleChange} value={props.tweet} />
          <button type= "submit" disabled= {!(props.tweet)}>Post</button>
          {
            props.errorMessage && <div className="error">{props.errorMessage}</div>
          }
        </div>
      </form>
    </div>
  )
}

export default TweetForm
