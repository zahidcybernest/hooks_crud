import { BUY_ICECREAM } from './iceCreamType.js';

const intialState = {
    numOfIceCreams: 20
}

export const iceCreamReducer = (state = intialState, action) => {

    switch(action.type){
        case BUY_ICECREAM: return{
            ...state,
            numOfIceCreams: state.numOfIceCreams-1
        }
        default: return state

    }
}

export default iceCreamReducer;