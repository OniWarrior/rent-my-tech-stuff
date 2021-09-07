import React from 'react'
import { useHistory } from 'react-router'

import useValidation from '../hooks/UseValidation'
import loginSchema from '../formSchemas/loginSchema'
import { Link } from 'react-router-dom'


const Login=(props)=>{
    const {push} = useHistory()

    const[login,errors,setLogin] = useValidation(loginSchema)

    const handleLogin=(e)=>{
        e.preventDefault()

    }

    const handleChange=(e)=>{
        e.preventDefault()
        setLogin(e,loginSchema)
    }    

    return(
      <div className='login-container'>
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor='username'>Username</label>
                </div>

                <input
                    id='username'
                    type='text'
                    name='username'
                    placeholder='Username/Email'
                    onChange={handleChange}
                />

                <div>
                    <label htmlFor='password'>Password</label>
                </div>

                <input
                    id='password'
                    type='password'
                    name='password'
                    placeholder='Password'
                    onChange={handleChange}
                />

                <div className='form-group-submit'>
                    <button id='login-button'>Login</button>
                    

                   
                    <div className='errors'>
                        <p>{errors.username}</p>
                        <p>{errors.password}</p>
                    </div>

                </div>
            </form>

           

        </div>
        <div className='container'>
            <div className='login-registrationlink'>
               <p>If you don't have an account, register here <button><Link to='/Register'>Register</Link></button></p>
            </div>
        </div>

      </div>  
    )

}


export default Login