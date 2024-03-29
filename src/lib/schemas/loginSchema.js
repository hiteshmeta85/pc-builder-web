import * as Yup from "yup";
import {object} from "yup";

const loginSchema = object({
  email: Yup.string().email('Enter a valid Email.').required('Email Required.'),
  password: Yup.string().required('Password Required.'),
})

export default loginSchema