export const FETCH_USERS='FETCH_USERS'
export const FETCH_USERS_SUCCESS='FETCH_USERS_SUCCESS'
export const FETCH_USERS_ERROR='FETCH_USERS_ERROR'
export  interface UserState{
    users:Array<any>
    loading:boolean
    error:null|string
}
interface FetchUserAction {
    type:typeof FETCH_USERS

}
interface FetchUserSuccessAction {
    type:typeof FETCH_USERS_SUCCESS
    payload:Array<any>
}
interface FetchUserErrorAction {
    type:typeof FETCH_USERS_ERROR
    payload:string
}
export  type UserAction =FetchUserAction|FetchUserSuccessAction|FetchUserErrorAction