# Connect , mapStateToProps, mapDispatchToProps
Used for organizing states and dispatches, allowing them to be used as props for other components.

cakeContainer.jsx
```
import React from "react";
import { buyCake } from "../redux/cake/cakeActions";
import {connect} from 'react-redux';

# No need for using selectors here as props contain states and dispatches

function CakeContainer(props){
    return (<div>
        <h2>Num of cakes - {props.numOfCakes}</h2>
        <button onClick={props.buyCake}>Buy cake</button>
    </div>)
}

# Used for getting data out of a store, cake container will receive additional props from this
# You can also pass in an additional prop to mapStateToProps for additional functions

const mapStateToProps = state=>{
    return {
        numOfCakes : state.numOfCakes
    }
}

# Used for updating states, cake container will receive additonal props from this
# You can also pass in an additional prop to mapDispatchToProps for additional functions

const mapDispatchToProps = dispatch =>{
    return {
        buyCake : ()=> dispatch(buyCake())
    }
}


# Connects the states and dispatches to the CakeContainer
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
```
