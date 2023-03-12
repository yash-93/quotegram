import React, { useContext } from 'react';
import { useQuery } from 'react-query'
import { getDocs, collection } from 'firebase/firestore';

import { QuotesContext } from '../context/quotes-context';
import { db } from '../firebase';
import '../styles/feed.css';
import Post from './post';

function Feed() {
  const quotesContext = useContext(QuotesContext);
  const { isLoading } = useQuery('quotes', async () => {
    const allQuotes = await getDocs(collection(db, `${process.env.REACT_APP_QUOTE_COLLECTION_NAME}`));
    let payload = [];
    allQuotes.forEach((quote) => {
      const quoteData = quote.data();
      payload.push({
        quote: quoteData.quote,
        userId: quoteData.userId,
        timestamp: quoteData.timestamp,
        id: quote.id
      });
    })
    quotesContext.quotes = payload;
  })
  if (isLoading) return <div>Loading...</div>
  return (
    <div className='feed_parent_container'>
      <div className='quotes_parent_container'>
        {
          quotesContext.quotes.map((item, index) => <Post key={index} username={item.username} quote={item.quote} likes={item.likes} />)
        }
      </div>
    </div>
  );
}

export default Feed;
