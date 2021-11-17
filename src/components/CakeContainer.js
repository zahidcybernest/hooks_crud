import React, { useEffect, useState } from 'react';
import {Provider} from 'react-redux'
import store from './redux/store'

import RedChild1 from './redChild1'
import  UseSelecterTest  from "./useSelecterTest"
import UserContainer from './userContainer';

function CakeContainer(){
    
    return(

        <Provider store = {store}>
            

            <div>

             
               <RedChild1/>
               <UseSelecterTest/>
               <hr/>
               <UserContainer/>
               <hr/>
               <br></br>
               
            </div>

         </Provider>
        
    )
}
export default CakeContainer