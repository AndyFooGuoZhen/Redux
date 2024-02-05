import React from "react";
import { buyCake } from "../redux/cake/cakeActions";
import {connect} from 'react-redux';

function CakeContainer(props){
    return (<div>
        <h2>Num of cakes - {props.numOfCakes}</h2>
        <button onClick={props.buyCake}>Buy cake</button>
    </div>)
}

// Used for getting data out of a store, cake container will receive additional props from this
// You can also pass in an additional prop to mapStateToProps for additional functions

const mapStateToProps = state=>{
    return {
        numOfCakes : state.numOfCakes
    }
}

// Used for updating states, cake container will receive additonal props from this
// You can also pass in an additional prop to mapDispatchToProps for additional functions

const mapDispatchToProps = dispatch =>{
    return {
        buyCake : ()=> dispatch(buyCake())
    }
}


// Connects the 
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);