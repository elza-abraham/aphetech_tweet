import React from 'react'

const TweetForm = (props) => {
  return (
    <form onSubmit= {props.handleSubmit}>
        <label>Tweet:</label>
        <div><textarea name="tweet" onChange={props.handleChange} value={props.tweet} />
        <button type= "submit" disabled= {!(props.tweet)}>Post</button></div>
        {
          props.errorMessage && <div className="error">{props.errorMessage}</div>
        }
      </form>
  )
}

export default TweetForm
