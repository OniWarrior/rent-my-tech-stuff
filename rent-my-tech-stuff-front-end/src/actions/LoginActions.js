import axios from "axios";
import jwtDecode from "jwt-decode";
import AxiosWithAuth from '../utils/AxiosWithAuth'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const postLogin=(e,login,push)=>(dispatch)=>{
    dispatch({type:LOGIN_START})
    axios.post('',login)
    .then(response=>{
        dispatch({type:LOGIN_SUCCESS, payload:response.data})
        localStorage.setItem("token",response.data.token)
        alert("You've been logged in!!!")
        const decode = jwtDecode(response.data.token)
        if (decode.role_name === 'owner'){
            push('/Owner')
        }
        else if(decode.role_name === 'renter'){
            push('/Renter')
        }
    })
    .catch(err=>{
        dispatch({type:LOGIN_FAILURE,payload:err})
        alert("Sorry, login failed!!")
        push('/Login')

    })
}

export const editLogin=(id,push,login)=>(dispatch)=>{
    dispatch({type:LOGIN_START})
    AxiosWithAuth().put('',login)
    .then(response=>{
        dispatch({type:LOGIN_SUCCESS,payload:response.data})
        alert("Edit on login successful")
        push('/Login')
    })
    .catch(err=>{
        dispatch({type:LOGIN_FAILURE,payload:err.message})
        alert("Edit failed!!")
    })

}




