import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter';
import listReducer from "./list";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    list: listReducer
  },
})