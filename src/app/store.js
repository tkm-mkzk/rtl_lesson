import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import customCounterSlice from '../features/customCounter/customCounterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    customCounter: customCounterSlice,
  },
})
