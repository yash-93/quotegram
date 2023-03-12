import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { signOut } from 'firebase/auth';

import { auth } from '../firebase';
import { AuthContext } from '../context/auth-context';

import '../styles/navbar.css';

function Navbar() {
  const authContext = useContext(AuthContext);

  return (
    <nav className='navbar_container'>
      <div id='navbar_logo'>
        <img src={process.env.REACT_APP_LOGO_URL} alt='' style={{ maxWidth: '100%' }} />
        <p>uotegram</p>
      </div>
      {authContext.isLoggedIn ?
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
              signOut(auth)
                .then(() => {
                  authContext.logout();
                  console.log('logged out');
                })
                .catch(err => console.log(err))
            }}
          >
            <FiLogOut size={25} id='navbar_item_logout' />
          </div>
        </> :
        <div>
          <ul id='navbar_ul__items'>
            <Link to={'/'} className='link'>
              <li className='navbar_ul__item'>Sign In</li>
            </Link>
          </ul>
        </div>
      }
    </nav>
  );
}

export default Navbar;
