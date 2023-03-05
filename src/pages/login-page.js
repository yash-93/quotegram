import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '../firebase';
import { setLogin } from '../store/slice/authSlice';
import Navbar from '../components/navbar';
import LogIn from '../components/login';
import SignUp from '../components/signup';
import '../styles/dashboard.css';

function LogInPage() {
  let authData = useSelector((state) => state.auth);
  let dispatch = useDispatch();
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const email = user.email;
      dispatch(setLogin({ email: email, username: email.substring(0, email.indexOf('@')) }));
    } else {
      dispatch(setLogin({ email: null, username: null }));
    }
  });

  return (
    <>
      {authData.email && (
        <Navigate to='/dashboard' replace={true} />
      )}
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
          showSignUpForm ?
            <SignUp setShowSignUpForm={setShowSignUpForm} /> :
            <LogIn setShowSignUpForm={setShowSignUpForm} />
        }
      </div>
    </>
  );
}

export default LogInPage;
