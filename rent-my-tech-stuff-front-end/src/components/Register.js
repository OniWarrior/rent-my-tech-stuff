import React from 'react'

import { useHistory } from 'react-router'
import registerSchema from '../formSchemas/registerSchema'
import useValidation from '../hooks/UseValidation'

import { postRegister } from '../actions/RegisterActions'
import { connect } from 'react-redux'


const Register=(props)=>{
    const {push}=useHistory()
    const [register,errors,setRegister] = useValidation(registerSchema)

    const handleRegister=(e)=>{
        e.preventDefault()
        props.postRegister(register,push)
    }

    const handleChange=(e)=>{
        setRegister(e,registerSchema)
    }

    return(
      
        <div className='container'>
            <h2>Register New Account</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label htmlFor='username'>username</label>
                </div>

                <input
                    id='username'
                    type='text'
                    name='username'
                    placeholder='Username/Email'
                    onChange={handleChange}
                />

                <div>
                    <label htmlFor='password'>password</label>
                </div>

                <input
                    id='password'
                    type='password'
                    name='password'
                    placeholder='Password'
                    onChange={handleChange}
                />

                <div>
                    <label htmlFor='phoneNumber'>Phone Number</label>
                </div>

                <input
                    id='phoneNumber'
                    type='text'
                    name='phoneNumber'
                    placeholder='Phone Number'
                    onChange={handleChange}
                />

                <div className='form-group-submit'>
                    <button id='register-button'>Register</button>

                    <div className='errors'>
                        <p>{errors.username}</p>
                        <p>{errors.password}</p>
                        <p>{errors.phoneNumber}</p>
                    </div>
                </div>
            </form>

        </div>
    )


    
}


const mapStateToProps=(state)=>{
    return {
        register:state.registerReducer.register,
        error:state.registerReducer.error,
        loading:state.registerReducer.loading
    }
}

const mapDispatchToProps={postRegister}

export default connect(mapStateToProps,mapDispatchToProps)(Register)