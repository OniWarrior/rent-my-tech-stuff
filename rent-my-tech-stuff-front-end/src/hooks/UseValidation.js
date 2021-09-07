import * as yup from yup
import {useState} from 'react'

const initialValues ={
    username:'',
    password:'',
    phoneNumber:''
}

const initialErrors={
    username:'',
    password:'',
    phoneNumber:''
}

const useValidation=(schema)=>{
    const[data,setData]=useSate(initialValues)
    const[errors,setErrors]=useState(initialErrors)

    const onInputChange=(event)=>{
        const {name,value}=event.target
        yup.reach(schema,name)
        .validation(value)
        .then(()=>{
            setErrors({...errors,[name]:''})
        })
        .catch(err=>{
            setErrors({...errors,[name]:err.errors[0]})
        })

        setData({
            ...data,
            [name]:value
        })
    }

    return[data,errors,onInputChange]



}

export default useValidation