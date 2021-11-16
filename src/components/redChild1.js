import React, { useEffect, useState } from 'react';
import {  Button, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux'

import { buyCake } from './redux/index'



 function RedChild1(props) {

    return (
        <div>

            <h2>Child1</h2>
            <h2> No. of Cakes- {props.numOfCakes}</h2>
            <button onClick= {props.buyCake}>Buy Cake</button>

        </div>
        
           
            
    )
}

const mapStateToProps = state => {
    return{
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return{
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(RedChild1);
// export default RedChild1;