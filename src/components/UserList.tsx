import React, {useEffect} from "react";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchUser} from "../store/action-creator/users";
import type {} from 'redux-thunk/extend-redux';
import {useAction} from "../hooks/useActiaon";

const UserList:React.FC=()=>{
    const {users,loading,error}=useTypedSelector(state => state.user)
    const {fetchUser}=useAction()
    useEffect(()=>{
        fetchUser()
    },[])
    if (loading){
        return <h1>Идет загрузка...</h1>
    }
    if(error){
        return <h1>{error}</h1>
    }
    return(
        <div>
            {users.map(user =>{return <div key={user.id}>{user.name}</div>}
            )}
        </div>
    )
}

export default UserList;