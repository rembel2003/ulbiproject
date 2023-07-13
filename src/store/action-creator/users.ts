import {FETCH_USERS, FETCH_USERS_ERROR, FETCH_USERS_SUCCESS, UserAction} from "../../types/user";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchUser=()=>{
    return async (dispatch:Dispatch<UserAction>)=>{
        try{
            dispatch({type:FETCH_USERS})
            const response=await  axios.get("https://jsonplaceholder.typicode.com/users")
            dispatch({type:FETCH_USERS_SUCCESS,payload:response.data})
        }
        catch (e){
            dispatch({type:FETCH_USERS_ERROR,payload:"Произошло ошибка при загрузке пользовотелей"})
        }
    }
}