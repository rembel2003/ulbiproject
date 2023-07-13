import {FETCH_USERS, FETCH_USERS_ERROR, FETCH_USERS_SUCCESS, UserAction, UserState} from "../../types/user";

const initialState:UserState={
    users:[],
    loading:false,
    error:null
}

export const userReducer=(state=initialState,action:UserAction):UserState=>{
    switch (action.type) {
        case FETCH_USERS:
            return{
                loading:true,error:null,users:[]
            }
        case FETCH_USERS_SUCCESS:
            return{
                loading:false,error:null,users:action.payload
            }
        case FETCH_USERS_ERROR:
            return{
                loading:false,error:action.payload,users:[]
            }
        default :
           return  state
    }
}