import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { buyCake } from './redux/index'




 function UseSelecterTest() {

    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()

    return (
        <div>

            <h2>UseSelecterTest</h2>
            <h2> No. of Cakes- {numOfCakes}</h2>
            <button onClick= {() => dispatch(buyCake())}>Buy Cake</button>

           

        </div>
        
           
            
    )
}




export default UseSelecterTest;