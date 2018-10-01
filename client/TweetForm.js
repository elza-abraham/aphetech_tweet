import React from 'react'

const TweetForm = (props) => {
  return (
    <div>
      <form onSubmit= {props.handleSubmit}>
        <label>Tweet:</label>
        <div><textarea maxLength = "255" name="tweet" onChange={props.handleChange} value={props.tweet} />
        <button type= "submit" disabled= {!(props.tweet)}>Post</button></div>
        {
          props.errorMessage && <div className="error">{props.errorMessage}</div>
        }
      </form>
    </div>
  )
}

export default TweetForm
