import React from "react"
import { UseSelector, useDispatch, useSelector } from "react-redux"
import { buyCake } from "../redux/cake/cakeActions"

function CakeContainerExternal(){

    const numCakes = useSelector(state=>state.numOfCakes)
    const dispatch = useDispatch()

    return (<div>
        <h2>Num of cakes - {numCakes}</h2>
        <button onClick={()=>dispatch(buyCake())}>Buy cake</button>
    </div>)
}

export default CakeContainerExternal;