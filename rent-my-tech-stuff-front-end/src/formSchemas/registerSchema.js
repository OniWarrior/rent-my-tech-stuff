import * as yup from 'yup'
import 'yup-phone'

const registerSchema=yup.object().shape({
    username:
    yup.string()
    .trim()
    .required('A username is required. Please fill out field')
    .min(14,'A minimum of 14 characters are required'),
    password:
    yup.string()
    .trim()
    .required("A password is required. Please fill out field")
    .min(14,'A minimum of 14 characters is required'),
    phoneNumber:
    yup.string()
    .trim()
    .phone()
    .required("A phone number is requred. Please fill out field")


})

export default registerSchema