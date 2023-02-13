import React from 'react';

import '../styles/newquote.css';

function NewQuote() {
  return (
    <div className='new_quote_container'>
      <div className='new_quote_header'>
        <p id='new_quote_header_heading'>Share quote</p>
      </div>
      <form
        id='new_quote_form'
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <textarea id='new_quote_input' placeholder='Share your thoughts...' />
        <input id='new_quote_share' type='submit' value='Share' />
      </form>
    </div>
  );
}

export default NewQuote;
