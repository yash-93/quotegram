import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice';
import quotesReducer from './slice/quotesSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    quotes: quotesReducer,
  },
})
