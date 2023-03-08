import { createSlice } from '@reduxjs/toolkit';
import { collection, addDoc, getDocs } from 'firebase/firestore';

import { db } from '../../firebase';
import { store } from '../index';

const initialState = {
  quotes: []
}

export const quotesSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {
    addQuote: (state, action) => {
      state.quotes = action.payload.quote
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
      let payload = store.getState().quotes.quotes || [];
      payload = [...payload, {
        quote: values.quote,
        userId: values.userId,
        timestamp: timestamp,
        id: docRef.id
      }]
      dispatch(
        addQuote({
          quote: payload
        })
      )
    } catch (err) {
      console.log('Error while creating quote: ', err);
    }
  }

export const getAllQuotes = (values) =>
  async (dispatch) => {
    try {
      const allQuotes = await getDocs(collection(db, `${process.env.REACT_APP_QUOTE_COLLECTION_NAME}`));
      let payload = [];
      allQuotes.forEach((quote) => {
        const quoteData = quote.data();
        payload.push({
          quote: quoteData.quote,
          userId: quoteData.userId,
          timestamp: quoteData.timestamp,
          id: quote.id
        });
      })
      dispatch(
        addQuote({
          quote: payload
        })
      )
    } catch (err) {
      console.log('Error while fetching all quotes: ', err);
    }
  }

export default quotesSlice.reducer;
