import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

import '../styles/navbar.css';

function Navbar() {
  return (
    <nav className='navbar_container'>
      <div id='navbar_logo'>
        <img src={process.env.REACT_APP_LOGO_URL} alt='' style={{ maxWidth: '100%' }} />
        <p>uotegram</p>
      </div>
      <div>
        <ul id='navbar_ul__items'>

          <Link to={'/dashboard'} className='link'>
            <li className='navbar_ul__item'>Dashboard</li>
          </Link>
          <Link to={'/new-quote'} className='link'>
            <li className='navbar_ul__item'>New Quote</li>
          </Link>
        </ul>
      </div>
      <FiLogOut size={25} id='navbar_item_logout' />
    </nav>
  );
}

export default Navbar;
