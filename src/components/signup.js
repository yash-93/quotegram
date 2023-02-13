import React from 'react';

import '../styles/signup.css';

function Signup() {
  return (
    <div className='signup_container'>
      <div className='signup_header'>
        <p id='signup_header_heading'>Join our network</p>
        <p id='signup_header_description'>We'd love to have you!</p>
      </div>
      <form
        id='signup_form'
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input type='email' className='signup_input' placeholder='Enter your email' />
        <input type='text' className='signup_input' placeholder='Enter your username' style={{ marginTop: '1rem' }} />
        <input type='password' className='signup_input' placeholder='Create a password' style={{ marginTop: '1rem' }} />
        <div id='signup_footer'>
          <p>Already have an account? Log in</p>
          <input id='signup_button' type='submit' value='Sign up' />
        </div>
      </form>
    </div>
  );
}

export default Signup;
