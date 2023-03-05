import React, { useState } from 'react';
import { setDoc, doc } from 'firebase/firestore';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { createNewUser } from '../auth';
import { db } from '../firebase';
import { toastOptions } from '../util';

import '../styles/signup.css';

const initialValues = {
  email: '',
  username: '',
  password: ''
};

function Signup({ setShowSignUpForm }) {
  const [values, setValues] = useState(initialValues);

  const handleInput = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleCreateUser = (e) => {
    e.preventDefault();
    createNewUser(values.email, values.password)
      .then(async () => {
        try {
          await setDoc(doc(db, `${process.env.REACT_APP_USER_COLLECTION_NAME}`, values.email), {
            email: values.email,
            username: values.username
          }, { merge: true });
          toast.success('Profile created.', { ...toastOptions });
        } catch (err) {
          console.log('Account created. Error while creating profile: ', err);
          toast.error('Account created. Error while creating profile: ', { ...toastOptions });
        }
      })
      .catch(err => {
        console.log('Unable to create account: ', err);
        toast.error(`Unable to create account: ${err}`, { ...toastOptions });
      })
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
          name='username'
          placeholder='Enter your username'
          style={{
            marginTop: '1rem'
          }}
          value={values.username || ''}
          onChange={handleInput}
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
      <ToastContainer />
    </div>
  );
}

export default Signup;
