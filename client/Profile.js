import React from 'react'
import moment from 'moment'

const Profile = (props) => {
  const user = props.user

  return (
    <div key={user.id}>
      <div><img src={user.imgUrl} />{user.name}</div>
      <div>{props.tweetCount} tweets</div>
    </div>
  )
}

export default Profile
