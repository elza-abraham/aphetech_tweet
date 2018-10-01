import React from 'react'
import moment from 'moment'

const Profile = (props) => {
  const user = props.user
  console.log(user)
  return (
    <div key={user.id}>
      <div><img src={user.imgUrl} />{user.name}</div>
      <div>{props.tweetCount} tweets</div>
      <div>{user.follower ? user.follower.length : ''} followers</div>
      <div>{user.following ? user.following.length : ''}  following</div>
    </div>
  )
}

export default Profile
