import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createQuote } from '../store/slice/quotesSlice';
import '../styles/newquote.css';

function NewQuote() {
  let authData = useSelector((state) => state.auth);
  const [quote, setQuote] = useState('');
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setQuote(e.target.value);
  }

  return (
    <div className='new_quote_container'>
      <div className='new_quote_header'>
        <p id='new_quote_header_heading'>Share quote</p>
      </div>
      <form
        id='new_quote_form'
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(createQuote({
            quote: quote,
            sharedBy: authData.email
          }));
        }}
      >
        <textarea
          id='new_quote_input'
          name='quote'
          placeholder='Share your thoughts...'
          value={quote}
          onChange={handleInput}
        />
        <input id='new_quote_share' type='submit' value='Share' />
      </form>
    </div>
  );
}

export default NewQuote;
