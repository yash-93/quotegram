import { createSlice } from '@reduxjs/toolkit';
import { setDoc, doc } from 'firebase/firestore';
import { signInUser, createNewUser } from '../../auth';
import { db } from '../../firebase';

const initialState = {
  email: null,
  username: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.email = action.payload.email
      state.username = action.payload.username
    },
    setLogout: (state) => {
      state.email = null
      state.username = null
    },
  },
})

export const { setLogin, setLogout } = authSlice.actions;

export const login = (values) =>
  async (dispatch) => {
    signInUser(values.email, values.password)
      .then(data => {
        console.log('Sign in successful: ', data);
        dispatch(
          setLogin({
            email: values.email,
            username: values.username
          })
        )
      })
      .catch(err => {
        console.log('Sign in failed: ', err);
      })
  }

export const signup = (values) =>
  async (dispatch) => {
    createNewUser(values.email, values.password)
      .then(async () => {
        try {
          await setDoc(doc(db, `${process.env.REACT_APP_USER_COLLECTION_NAME}`, values.email), {
            email: values.email,
            username: values.username
          }, { merge: true });
          console.log('Account created.');
          dispatch(
            setLogin({
              email: values.email,
              username: values.username
            })
          )
        } catch (err) {
          console.log('Account created. Error while creating profile: ', err);
        }
      })
      .catch(err => {
        console.log('Unable to create account: ', err);
      })
  }

export default authSlice.reducer;
