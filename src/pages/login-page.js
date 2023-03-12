import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { auth } from '../firebase';
import { AuthContext } from '../context/auth-context';

import Navbar from '../components/navbar';
import LogIn from '../components/login';
import SignUp from '../components/signup';
import '../styles/dashboard.css';

function LogInPage() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const [showSignUpForm, setShowSignUpForm] = useState(false);

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
        authContext.isLoggedIn ?
          navigate('/dashboard') :
          <>
            {
              showSignUpForm ?
                <SignUp setShowSignUpForm={setShowSignUpForm} /> :
                <LogIn setShowSignUpForm={setShowSignUpForm} />
            }
          </>
      }
    </div>
  );
}

export default LogInPage;
