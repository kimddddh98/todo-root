import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/redux/counterSlice'

import postListSlice from './postListSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    post : postListSlice
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
