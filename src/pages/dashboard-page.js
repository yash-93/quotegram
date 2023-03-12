import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { auth } from '../firebase';
import { AuthContext } from '../context/auth-context';

import Feed from '../components/feed';
import Navbar from '../components/navbar';
import '../styles/dashboard.css';

function DashboardPage() {
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
    <div className='dashboard_container'>
      <Navbar />
      {
        !authContext.isLoggedIn ?
          navigate('/') :
          <Feed />
      }
    </div>
  );
}

export default DashboardPage;
