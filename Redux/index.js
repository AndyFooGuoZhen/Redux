const redux = require('redux')
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger();

const BUY_CAKE = 'BUY_CAKE';
const SELL_CAKE = 'SELL_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

//Action is an object with a type property 
// Action creator : function that returns an action
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

function buyIceCream(){
    return {
        type: BUY_ICECREAM,
        info: 'First redux action'
    }
}

// (previousSTate, action) => newState
const initialCakeState = {
    numOfCakes: 10,
}

const initialIceCreamState = {
    numIceCreams: 20
}   


const cakeReducer = (state = initialCakeState, action) =>{
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

const iceCreamReducer = (state = initialIceCreamState, action) =>{
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state,
            numIceCreams: state.numIceCreams - 1
        }
        default: return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger));
console.log('Initial state', store.getState());
// store.subscribe(()=>console.log('Updated state', store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(sellCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());



