Resource : https://www.youtube.com/watch?v=5yEG6GhoJBs

# Redux
State management library , makes states global

# Store
Global state that's gonna be accesible. In a store , you will have multiple slices for components. Holds the state.

# Slice
A slice encapsulates the state, actions, and reducer logic related to a specific feature.

# Action
What you use to interact/change the state. Describes what happened.

Basic structure of an action 
```
{type: <string>, payload : <data>}

The type would be the name of the action

Note that the payload parameter is optional. You can include the payload field so redux can use it to perform its task.

```

# Reducers
Takes an action, and use the type of the action to perform updates. Reducers will never make changes to the global state directly, instead it makes a copy of the state and perform updates on the copy instead. Carries out state transition depending on the action.


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

# Building a slice and linking our reducer
1. Define an interface
2. Define an initial state with structure of the interface
3. Create a slice with name, initialState and reducer

```
counterSlice.ts

import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

export default counterSlice.reducer;
```

By using createSlice using redux toolkit, we get access to a reducer that we can export.

4. Navigate back to store and import our reducer into the reducer field of our store

```
Store.ts

import counterReducer from "./counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,  # changes here
  },
});

```

# Building a reducer 
By using createSlice, we are not mutating the state directly (even though the code snippet below it looks like it does it directly). We can also add custom actions/payload for more customized reducer functions (look at incrementByAmount reducer).

```
counterSlice.ts

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
        state.value += action.payload;
      },
  },
});

export const { increment, decrement, incrementByAmount} = counterSlice.actions;
```

We then export our actions using counterSlice.actions.

# Using our global state in a component
1. import actions from our slice
2. import rootState (type of store.getState) and Appdispatch (type of store.dispatch)
3. import useDispatch and useSelector from react-redux
4. We use the useSelector hook to select our global state
5. We use dispatch to execute our reducer function

```
Counter.tsx

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { decrement, increment, incrementByAmount, incrementAsync } from "../state/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>{count}</h2>
      <div>
      <button onClick={() => dispatch(increment())}>Increment by 1</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
```

# Simulating an async action 
createAsyncThunk is used to create an async action. The name for async functions goes with the sliceName/action convention. We then use extraReducer to include our async action and manage our async conditions (pending vs fulfilled).

```
counterSlice.ts

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, () => {
        console.log("incrementAsync.pending");
      })
      .addCase(
        incrementAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.value += action.payload;
        }
      );
  },
});

export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  }
);

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
```











