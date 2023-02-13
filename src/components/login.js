import React from 'react';

import '../styles/login.css';

function Login() {
  return (
    <div className='login_container'>
      <div className='login_header'>
        <p id='login_header_heading'>Welcome back</p>
        <p id='login_header_description'>Welcome back! Please enter your details</p>
      </div>
      <form
        id='login_form'
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input type='text' className='login_input' placeholder='Enter your username' />
        <input type='password' className='login_input' placeholder='Create a password' style={{ marginTop: '1rem' }} />
        <div id='login_footer'>
          <p>Dont't have an account? Sign up</p>
          <input id='login_button' type='submit' value='Log in' />
        </div>
      </form>
    </div>
  );
}

export default Login;
