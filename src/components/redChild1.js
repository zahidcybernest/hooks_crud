import React from 'react';

import { connect } from 'react-redux'

import { buyCake } from './redux/index'

import RedChild2 from './redChild2'



 function RedChild1(props) {

    return (
        <div>

            <h2>Child1</h2>
            <h2> No. of Cakes- {props.numOfCakes + 5}</h2>
            <button onClick= {props.buyCake}>Buy Cake</button>
            <hr/>

            <RedChild2/>
            <hr/>

        </div>
        
           
            
    )
}

const mapStateToProps = state => {
    return{
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return{
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(RedChild1);
// export default RedChild1;