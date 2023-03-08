import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { Navigate } from 'react-router-dom';

import { auth } from './firebase';
import { setLogin } from './store/slice/authSlice';
import LogInPage from './pages/login-page';

function App() {
  let dispatch = useDispatch();
  let authData = useSelector(state => state.auth);

  useEffect(() => {
    function onAuthStateChange() {
      return onAuthStateChanged(auth, (user) => {
        if (user) {
          const email = user.email;
          console.log('onAuthStateChanged() called');
          dispatch(setLogin({ email: email, username: email.substring(0, email.indexOf('@')), isAuthenticated: true }));
        } else {
          dispatch(setLogin({ email: null, username: null, isAuthenticated: false }));
        }
      });
    }
    const unsubscribe = onAuthStateChange();
    return () => {
      unsubscribe();
    }
  }, [dispatch]);

  return (
    <>
      {
        authData.isAuthenticated ? <Navigate to='/dashboard' replace={true} /> : <LogInPage />
      }
    </>
  )
}

export default App;
