import React from 'react'

const Profile = (props) => {

  const user = props.user

  //Later this will be moved into Language Bundle for Multi Language support
  const following = ' following '
  const followers = ' followers '
  const tweets = ' tweets '

  return (
    <div key={user.id}>
      <div className="profile-pic">
        <img src={user.imgUrl} alt="Profile pic" width="10" height="10" />{user.name}
      </div>
      <hr />
      {user.tweets ? user.tweets.length : 0}{tweets}
      {user.follower ? user.follower.length : ' '}{following}
      {user.following ? user.following.length : ' '}{followers}
    </div>
  )
}

export default Profile
