import axios from "axios";

export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'

export const postRegister=(registration,push)=>(dispatch)=>{
    dispatch({type:REGISTER_START})
    axios.post('',registration)
    .then(response=>{
        dispatch({type:REGISTER_SUCCESS,payload:response.data})
        alert("Account successfully created!!!")
        push("/Login")
    })
    .catch(err=>{
        dispatch({type:REGISTER_FAILURE, payload:err.message})
        alert("Account registration failed!!")
        
    })
}