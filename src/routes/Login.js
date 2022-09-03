import {Form, Formik} from "formik";
import * as Yup from 'yup';
import {Box, Button, FormLabel, Heading, Link, Text} from "@chakra-ui/react";
import CustomInput from "../components/CustomInput";
import {useState} from "react";
import axios from "axios";
import {Redirect} from 'react-router-dom';

const Login = (props) => {

  const [errors, setErrors] = useState('')

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string().email('Enter a valid Email.').required('Email Required.'),
        password: Yup.string().required('Password Required.'),
      })}
      onSubmit={async (values, {setSubmitting}) => {
        setSubmitting(false);
        try {
          const result = await axios.put(`${process.env.REACT_APP_API_HOST}/user/session`, {
              email: values.email,
              password: values.password
            }, {withCredentials: true}
          )
          if (result) {
            props.setIsLoggedIn(true)
          }
        } catch (err) {
          setErrors(err.response.data.errors)
        }
      }}
    >{({
         handleSubmit,
         isSubmitting,
       }) => (
      <Box py={20} maxW='1360px' mx='auto' px={{base: '1rem', md: '2rem'}}>
        {props.isLoggedIn ? <Redirect to='/'/> : false}
        <Box bgColor='#FFFFFF'
             px={{sm: '1rem', md: '1.5rem'}} py={{sm: '1rem', md: '2rem'}} borderRadius={{md: '1rem'}}
             mx={{base: '1rem', md: '15%', lg: 'auto'}} maxW='600px'>
          <Heading fontSize={{base: '1.25rem', md: '2rem'}} mb='1.5rem'>Login</Heading>
          <Form onSubmit={handleSubmit}>
            <Box mb='0.75rem'>
              <FormLabel htmlFor='email' width='100%' mb='0' mt={{base: '1rem', md: '0'}}>Email</FormLabel>
              <CustomInput type='email' name='email' placeholder='johndoe@gmail.com'/>
            </Box>
            <Box>
              <FormLabel htmlFor='password' width='100%' mb='0'>Password</FormLabel>
              <CustomInput type='password' name='password' placeholder='********'/>
            </Box>
            <Button mt='1rem' bgColor='purple.500' w='100%' color='white' _hover={{bgColor: 'purple.400'}} isLoading={isSubmitting} type='submit'>Login</Button>
          </Form>
          {errors ? <Text textAlign='center' mt='1rem' color='gray'>{errors}</Text> : ''}
          <Text textAlign='center' mt='0.75rem'>New to our site?
            <Link href='/registration' style={{color: '#007BFF'}} ml={1}>Register User
            </Link>
          </Text>
        </Box>
      </Box>
    )}
    </Formik>
  );
}

export default Login