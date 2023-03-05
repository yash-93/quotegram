import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Feed from '../components/feed';
import Navbar from '../components/navbar';
import '../styles/dashboard.css';

function DashboardPage() {
  let authData = useSelector((state) => state.auth);

  return (
    <>
      {authData.email == null && (
        <Navigate to='/' replace={true} />
      )}
      <div className='dashboard_container'>
        <Navbar />
        <Feed />
      </div>
    </>
  );
}

export default DashboardPage;
