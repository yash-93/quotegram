import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { login } from '../store/slice/authSlice';

import '../styles/login.css';

const initialValues = {
  email: '',
  password: ''
};

function LogIn({ setShowSignUpForm }) {
  const [values, setValues] = useState(initialValues);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

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
          dispatch(login({
            email: values.email,
            password: values.password,
            username: values.email.substring(0, values.email.indexOf('@'))
          }));
        }}
      >
        <input
          type='text'
          className='login_input'
          name='email'
          placeholder='Enter your email'
          value={values.email || ''}
          onChange={handleInput}
        />
        <input
          type='password'
          className='login_input'
          name='password'
          placeholder='Enter your password'
          style={{ marginTop: '1rem' }}
          value={values.password || ''}
          onChange={handleInput}
        />
        <div id='login_footer'>
          <p>
            Dont't have an account?
            <label
              onClick={() => setShowSignUpForm(true)}
              style={{ cursor: 'pointer' }}
            > Sign up</label>
          </p>
          <input id='login_button' type='submit' value='Log in' />
        </div>
      </form>
    </div>
  );
}

export default LogIn;
