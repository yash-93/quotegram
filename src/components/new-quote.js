import React, { useContext, useState } from 'react';
import { useMutation } from 'react-query';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../context/auth-context';
import { QuotesContext } from '../context/quotes-context';
import { db } from '../firebase';
import '../styles/newquote.css';

function NewQuote() {
  const authContext = useContext(AuthContext);
  const quotesContext = useContext(QuotesContext);
  const navigate = useNavigate();

  const [quote, setQuote] = useState('');

  const newQuoteMutation = useMutation((newQuote) => {
    const timestamp = Date.now().toString();
    addDoc(collection(db, 'quotes'), {
      quote: newQuote,
      userId: authContext.username,
      timestamp
    })
      .then(docRef => {
        console.log('Quote created: ', docRef.id);
        let prevQuotes = quotesContext.quotes;
        prevQuotes.push(newQuote);
        quotesContext.quotes = prevQuotes;
        navigate('/dashboard');
      })
      .catch(err => console.log(err))
  });

  return (
    <div className='new_quote_container'>
      <div className='new_quote_header'>
        <p id='new_quote_header_heading'>Share quote</p>
      </div>
      <form
        id='new_quote_form'
        onSubmit={(e) => {
          e.preventDefault();
          newQuoteMutation.mutate(quote);
        }}
      >
        <textarea id='new_quote_input' name='new_quote_input' placeholder='Share your thoughts...' onChange={(e) => setQuote(e.target.value)} />
        <input id='new_quote_share' type='submit' value='Share' />
      </form>
    </div>
  );
}

export default NewQuote;
