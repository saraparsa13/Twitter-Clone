import React from 'react'

const Post = ({ tweet }) => {
  const date = tweet.created_at.split(' ')

  return (
    <div className="container w-75 mb-3 border border-primary">
      <div className="row mt-3 ml-4">
        <img
          src={ tweet.user.profile_image_url }
          className="profile-pic rounded-circle"
          alt=""
        />
        <div
          className="
            d-flex
            flex-column
            mt-3
            ml-5
          "
        >
          <span className="text-primary">{ tweet.user.screen_name }</span>
          <span className="text-secondary">{ date[1] } , { date[2] }</span>
        </div>
      </div>
      <p className="text-left p-5 text-white">{ tweet.text }</p>
    </div>
  )
}

export default Post
