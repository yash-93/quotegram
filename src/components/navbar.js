import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';

import { signout } from '../store/slice/authSlice';

import '../styles/navbar.css';

function Navbar() {
  let authData = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <nav className='navbar_container'>
      <div id='navbar_logo'>
        <img src={process.env.REACT_APP_LOGO_URL} alt='' style={{ maxWidth: '100%' }} />
        <Link to={'/'} className='link'>
          <p>uotegram</p>
        </Link>
      </div>
      {
        authData.email && (
          <>
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
            <div
              onClick={() => {
                dispatch(signout());
              }}
            >
              <FiLogOut size={25} id='navbar_item_logout' />
            </div>
          </>
        )
      }
    </nav>
  );
}

export default Navbar;
