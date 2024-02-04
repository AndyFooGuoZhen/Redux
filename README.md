# Redux
State management library , makes states global

# Store
Global state that's gonna be accesible. In a store , you will have multiple slices (think interface) for components. EX: CounterState is an interface that defines the types of the data that will be used in a Counter component.

# Action
What you use to interact/change the state

Basic structure of an action 
```
{type: <string>, payload : <data>}

The type would be the name of the action

Note that the payload parameter is optional. You can include the payload field so redux can use it to perform its task.

```

# Reducers
Takes an action, and use the type of the action to perform updates. Reducers will never make changes to the global state directly, instead it makes a copy of the state and perform updates on the copy instead.


# Creating a store in store.ts
In the code snippet below, we use configureStore to create a global state by including a reducer as our input for configureStore. When then export the type of store.getState and type of store.dispatch

```
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";

# Creating a store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

# When working with typescript, we can use the following types to define the types of the store and dispatch

# The configureStore function returns a store, and the we are getting the
type of the store.getState function by using the ReturnType utility type

export type RootState = ReturnType<typeof store.getState>;

# Getting the type of the store.dispatch function
export type AppDispatch = typeof store.dispatch;

```

# Connecting redux store to react application (main.tsx)
We cannot interact with react directly usign redux. That's why we use a Provider to wrap our react app and pass in out store as a prop.

```
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./state/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```



