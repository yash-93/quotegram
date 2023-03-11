import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { auth } from '../firebase';
import { AuthContext } from '../context/auth-context';

import Navbar from '../components/navbar';
import NewQuote from '../components/new-quote';
import '../styles/dashboard.css';
import '../styles/newquote.css';

function NewQuotePage() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authContext.isLoggedIn) {
      auth.onAuthStateChanged(user => {
        if (user) {
          authContext.login(user.email, user.email.substring(0, user.email.indexOf('@')));
        }
        else {
          authContext.logout();
        }
      })
    }
  }, [authContext]);

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
      {
        !authContext.isLoggedIn ?
          navigate('/') :
          <NewQuote />
      }
    </div>
  );
}

export default NewQuotePage;
