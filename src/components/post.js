import * as React from 'react';
import { FcLike } from 'react-icons/fc';

import '../styles/post.css';

function Post({ username, quote, likes }) {
  return (
    <div className='feed_post_container'>
      <div className='feed_post_header'>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src='https://res.cloudinary.com/doqyhbbg6/image/upload/v1676234095/githubprofile_y7j2e5.jpg'
            alt=''
            id='feed_post_header_profile_pic'
          />
          <p id='feed_post_header_username'>{username}</p>
        </div>
        <FcLike size={25} />
      </div>
      <p id='feed_post_quote'>{quote}</p>
      <p id='feed_post_likes'>{likes} likes</p>
    </div>
  );
}

export default Post;
