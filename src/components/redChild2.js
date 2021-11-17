import React from 'react';

import { connect } from 'react-redux'

import { buyIceCream } from './redux/index'



 function RedChild2(props) {
    

    return (
        <div>

            <h2>Child2</h2>
            <h2> No. of IceCreams- {props.numOfIceCreams}</h2>
            <button onClick= {props.buyIceCream}>Buy IceCream</button>

           

        </div>
        
           
            
    )
}

const mapStateToProps = state => {
 
    return{
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return{
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(RedChild2);
// export default RedChild2;