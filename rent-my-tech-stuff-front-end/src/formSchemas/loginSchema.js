import * as yup from 'yup'

const loginSchema =yup.object().shape({
    username:
    yup.string()    
    .required('Username is required.Please fill out field'),
    password:
    yup.string()
    .required('Password is required. Please fill out field')

})
export default loginSchema