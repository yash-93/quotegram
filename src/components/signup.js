import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { signup } from '../store/slice/authSlice';

import '../styles/signup.css';

const initialValues = {
  email: '',
  password: ''
};

function Signup({ setShowSignUpForm }) {
  const [values, setValues] = useState(initialValues);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleCreateUser = (e) => {
    e.preventDefault();
    dispatch(signup({
      email: values.email,
      password: values.password,
      username: values.email.substring(0, values.email.indexOf('@'))
    }));
  }

  return (
    <div className='signup_container'>
      <div className='signup_header'>
        <p id='signup_header_heading'>Join our network</p>
        <p id='signup_header_description'>We'd love to have you!</p>
      </div>
      <form
        id='signup_form'
        onSubmit={handleCreateUser}
      >
        <input
          type='email'
          className='signup_input'
          name='email'
          placeholder='Enter your email'
          value={values.email || ''}
          onChange={handleInput}
        />
        <input
          type='text'
          className='signup_input'
          placeholder='Username'
          style={{
            marginTop: '1rem'
          }}
          value={values.email.indexOf('@') !== -1 ? values.email.substring(0, values.email.indexOf('@')) || '' : values.email}
          disabled
        />
        <input
          type='password'
          className='signup_input'
          name='password'
          placeholder='Create a password'
          style={{
            marginTop: '1rem'
          }}
          value={values.password || ''}
          onChange={handleInput}
        />
        <div id='signup_footer'>
          <p>
            Already have an account?
            <label
              onClick={() => setShowSignUpForm(false)}
              style={{ cursor: 'pointer' }}
            > Log in</label>
          </p>
          <input id='signup_button' type='submit' value='Sign up' />
        </div>
      </form>
    </div>
  );
}

export default Signup;
