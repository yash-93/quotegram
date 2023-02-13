import * as React from 'react';

import Navbar from '../components/navbar';
import Login from '../components/login';
import SignUp from '../components/signup';
import '../styles/dashboard.css';

function LogInPage() {
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
      <Login />
      <SignUp />
    </div>
  );
}

export default LogInPage;
