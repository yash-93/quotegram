import * as React from 'react';

import Navbar from '../components/navbar';
import NewQuote from '../components/new-quote';
import '../styles/dashboard.css';
import '../styles/newquote.css';

function NewQuotePage() {
  return (
    <div
      className='dashboard_container'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Navbar />
      <NewQuote />
    </div>
  );
}

export default NewQuotePage;
