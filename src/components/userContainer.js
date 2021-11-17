import React, {useEffect} from "react";
import { connect } from "react-redux";
import { fetchUsers } from './redux/index';
import { useSelector, useDispatch } from 'react-redux';

function UserContainer({userData, fetchUsers}){

    
    // const dispatch = useDispatch()
    // const numOfCakes = useSelector(state => state.user)

    useEffect(() => {

        // dispatch(fetchUsers())
        fetchUsers() 
        

    }, [])

   


    return userData.loading ? (
        
        <h1>Loading......</h1>
        
    ) : userData.error ? (
        <h2> {userData.error}, 'error' </h2>
        

    ) : (
         <div>
             <h2>User List</h2>
         <div>
             <h1>success </h1>
            {
                userData & userData.users && 
                userData.users.map(user => <p>user.name</p>)}
        </div>
         </div>
 

    )
}

const mapStateToProps = state => {
    
    return{
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(UserContainer);

// export default UserContainer
