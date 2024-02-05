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



