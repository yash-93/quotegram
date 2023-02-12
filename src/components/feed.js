import React from 'react';

import '../styles/feed.css';
import Post from './post';

const DUMMY_DATA = [
  {
    'username': 'amenadiel',
    'quote': 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    'likes': '100'
  },
  {
    'username': 'lucifer',
    'quote': 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
    'likes': '50'
  },
  {
    'username': 'michael',
    'quote': 'Many desktop publishing packages and web page editors.',
    'likes': '50'
  },
  {
    'username': 'maze',
    'quote': 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    'likes': '100'
  },
  {
    'username': 'detective',
    'quote': 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
    'likes': '50'
  },
  {
    'username': 'chloe',
    'quote': 'Many desktop publishing packages and web page editors.',
    'likes': '50'
  }
];

function Feed() {
  return (
    <div className='feed_parent_container'>
      {
        DUMMY_DATA.map((item, index) => <Post key={index} username={item.username} quote={item.quote} likes={item.likes} />)
      }
    </div>
  );
}

export default Feed;
