import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ProductApi } from "./dummyData";

export const store = configureStore({
  reducer:{
    [ProductApi.reducerPath]:ProductApi.reducer
  },
  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(ProductApi.middleware)
})

setupListeners(store.dispatch)


