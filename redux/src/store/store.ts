import { configureStore } from "@reduxjs/toolkit";
import  Counter  from "./CounterSlice";

export const store = configureStore({
  reducer:{
    counter:Counter
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch