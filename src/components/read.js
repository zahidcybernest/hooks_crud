import React, { useEffect, useState } from 'react';
import {  Button, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import axios from 'axios';



export default function Read() {

const [APIData, setAPIData] = useState([]);

const setData = (data) => {
    console.log(data);
    let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('First Name', firstName);
    localStorage.setItem('Last Name', lastName);
    localStorage.setItem('Checkbox Value', checkbox)
}

const onDelete = (id) => {
    axios.delete(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`)
    .then(() => {
        getData();
    })
  }

  const getData = () => {
    axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
        .then((getData) => {
             setAPIData(getData.data);
         })
}

useEffect(() => {
    axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
        .then((response) => {
            setAPIData(response.data);
        })
},[])


    return (
        <div>
            
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Registration Date</Table.HeaderCell>
                        <Table.HeaderCell>E-mail address</Table.HeaderCell>
                        <Table.HeaderCell>Action1</Table.HeaderCell>
                        <Table.HeaderCell>Action2</Table.HeaderCell>
                        <Table.HeaderCell>Action3</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
  {APIData.map((data) => {
     return (
       <Table.Row>
          <Table.Cell>{data.firstName}</Table.Cell>
           <Table.Cell>{data.lastName}</Table.Cell>
           <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
           <Link to='/update'> <Table.Cell><Button onClick={() => setData(data)}>Update</Button></Table.Cell></Link>
           <Table.Cell>  <Button onClick={() => onDelete(data.id)}>Delete</Button> </Table.Cell>
           <Link to='/create'><Table.Cell>  <Button>Add</Button> </Table.Cell></Link>
        </Table.Row>
   )})}
</Table.Body>
            </Table>
        </div>
    )
}