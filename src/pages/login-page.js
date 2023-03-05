import React, { useState } from 'react';

import { auth } from '../firebase';

import Navbar from '../components/navbar';
import LogIn from '../components/login';
import SignUp from '../components/signup';
import '../styles/dashboard.css';

function LogInPage() {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
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
        auth.currentUser ?
          <div>User already signed in</div> :
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
