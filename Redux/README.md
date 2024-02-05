Resource : https://www.youtube.com/watch?v=9boMnm5X9ak&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=1

# Traditional Redux

# Action
Object with a type property

# Action creator
Function that returns an action

```
function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}
```

# Reducer
To determine how the state is transformed by actions, you write pure reducers. We use the  ... (spread operator) creates a copy of the state before making any changes to it in the reducer.

```
const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}
```

# Store

### Creating a store
Create a store and pass in our reducer. We can use the store.subsribe function to print out our state or perform the function that we passed into the subscribe function. We can use the getState function to print our state. We then use the dispatch function with a action creator to make changes to our state.

```
import {createStore} from 'redux';
const createStore = redux.createStore; 
const store = createStore(reducer);
store.subscribe(()=>console.log(store.getState()));
store.dispatch(buyCake());
```

# Multiple action creators and actions
```
const redux = require('redux')
const createStore = redux.createStore;

const BUY_CAKE = 'BUY_CAKE';
const SELL_CAKE = 'SELL_CAKE';

function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function sellCake(){
    return {
        type: SELL_CAKE,
        info: 'First redux action'
    }
}

const initialState = {
    numOfCakes: 10,
}


const reducer = (state = initialState, action) =>{
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
         case SELL_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes + 1
        }
        
        default: return state
    }
}

const store = createStore(reducer);
console.log('Initial state', store.getState());
store.subscribe(()=>console.log('Updated state', store.getState()));
store.dispatch(buyCake());
store.dispatch(sellCake());
```

# Multiple reducers and combination of reducers
For states that are unrelated, we'd like to make a seperate reducer for them. The problem arises when we want to pass in the reducers into our store. To solve this issue, we can use the combineReducer method. 

```
const redux = require('redux')
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buyIceCream(){
    return {
        type: BUY_ICECREAM,
        info: 'First redux action'
    }
}

  
const cakeReducer = (state = initialCakeState, action) =>{
  // reducer code here
}

const iceCreamReducer = (state = initialIceCreamState, action) =>{
   //reducer code here
}

// Combine the reducers
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})


//Pass the combined reducer to the store
const store = createStore(rootReducer);
```








