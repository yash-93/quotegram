import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import '../styles/feed.css';
import Post from './post';
import { getAllQuotes } from '../store/slice/quotesSlice';

function Feed() {
  let quotes = useSelector((state) => state.quotes);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllQuotes());
  }, []);
  return (
    <div className='feed_parent_container'>
      {
        quotes.quotes?.map((item, index) => <Post key={index} username={item.username} quote={item.quote} likes={item.likes} />)
      }
    </div>
  );
}

export default Feed;
