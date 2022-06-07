import {configureStore} from '@reduxjs/toolkit';
import useReducer from './slices/userSlices';

export const store = configureStore({
  reducer: {
    user: useReducer,
  },
});
