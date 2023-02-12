import * as React from 'react';

import Feed from '../components/feed';
import Navbar from '../components/navbar';
import '../styles/dashboard.css';

function DashboardPage() {
  return (
    <div className='dashboard_container'>
      <Navbar />
      <Feed />
    </div>
  );
}

export default DashboardPage;
