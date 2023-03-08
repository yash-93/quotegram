import { createSlice } from '@reduxjs/toolkit';
import { collection, addDoc } from 'firebase/firestore';

import { db } from '../../firebase';

const initialState = {
  quotes: []
}

export const quotesSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {
    addQuote: (state, action) => {
      state.quotes.push(action.payload.quote)
    },
  },
})

export const { addQuote } = quotesSlice.actions;

export const createQuote = (values) =>
  async (dispatch) => {
    const timestamp = Date.now().toString();
    try {
      const docRef = await addDoc(collection(db, 'quotes'), {
        quote: values.quote,
        userId: values.userId,
        timestamp: timestamp
      });
      console.log('Quote created.');
      dispatch(
        addQuote({
          quote: {
            quote: values.quote,
            userId: values.userId,
            timestamp: timestamp,
            id: docRef.id
          }
        })
      )
    } catch (err) {
      console.log('Error while creating quote: ', err);
    }
  }

export default quotesSlice.reducer;
