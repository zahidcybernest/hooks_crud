import React, { useEffect, useState } from 'react';
import {Provider} from 'react-redux'
import store from './redux/store'

import RedChild1 from './redChild1'

function CakeContainer(){
    return(

        <Provider store = {store}>

            <div>

             
               <RedChild1/>
               
            </div>

         </Provider>
        
    )
}
export default CakeContainer