import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navbar from '../components/navbar';
import NewQuote from '../components/new-quote';
import '../styles/dashboard.css';
import '../styles/newquote.css';

function NewQuotePage() {
  let authData = useSelector((state) => state.auth);

  return (
    <>
      {
        !authData.isAuthenticated && <Navigate to='/' replace={true} />
      }
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
    </>
  );
}

export default NewQuotePage;
