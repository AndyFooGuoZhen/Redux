import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";

//Creating a store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

//When working with typescript, we can use the following types to define the types of the store and dispatch

// the configureStore function returns a store, and the we are getting the
// type of the store.getState function by using the ReturnType utility type
export type RootState = ReturnType<typeof store.getState>;

// Getting the type of the store.dispatch function
export type AppDispatch = typeof store.dispatch;
