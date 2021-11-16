import React, { useEffect, useState } from 'react';
import {  Button, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import axios from 'axios';




export default function Home() {




    return (
        <div>
            <h2>Gooks & Redux App</h2>
            <Link to='/read'><Table.Cell>  <Button>Click to go into Hooks Crud</Button> </Table.Cell></Link>
            <Link to='/cake'><Table.Cell>  <Button>Redux part</Button> </Table.Cell></Link>
          
           
        </div>
    )
}