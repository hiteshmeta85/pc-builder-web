import {useState} from "react";
import {Form, Formik} from "formik";
import * as Yup from "yup";
import {Box, Button, Flex, FormLabel, Heading, Link, Text} from "@chakra-ui/react";
import CustomInput from "../components/CustomInput";
import axios from "axios";
import {Redirect} from "react-router-dom";

const Registration = (props) => {
    const [errors, setErrors] = useState('')

    return (<>
        <Formik
            initialValues={{
                name: '',
                email: '',
                password: '',
                passwordConfirmation: '',
                address: '',
                pincode: '',
                phone: '',
            }}
            validationSchema={Yup.object({
                name: Yup.string().required('Full Name Required.'),
                email: Yup.string().email().required('Email Required.'),
                password: Yup.string().required('Password Required.'),
                passwordConfirmation: Yup.string().required('Password Required.')
                    .oneOf([Yup.ref('password'), null], 'Passwords must match.'),
                address: Yup.string().required('Address Required.').min('20', 'Too short.'),
                pincode: Yup.number().required('Pincode Required.').min(100000, 'Not Valid.')
                    .max(999999, 'Not Valid.'),
                phone: Yup.number().required('Phone Number Required.').positive().integer('Phone number must be an integer.'),
            })}
            onSubmit={async (values, {setSubmitting}) => {
                setSubmitting(false);
                try {
                    const response = await axios.post(`${process.env.REACT_APP_API_HOST}/user`, {
                            name: values.name,
                            email: values.email,
                            password: values.password,
                            address: values.address,
                            pincode: values.pincode,
                            phone: values.phone
                        }, {withCredentials: true}
                    )
                    if (response.status === 200) {
                        props.setIsLoggedIn(true)
                    }
                } catch (err) {
                    setErrors(err.response.data.errors)
                }
            }}
        >{({
               handleSubmit,
               isSubmitting
           }) => (
            <Box pt={8} maxW='1360px' mx='auto' px={{base: '1rem', md: '2rem'}}>
                {props.isLoggedIn ? <Redirect to="/"/> : false}
                <Box
                    bgColor='#FFFFFF'
                    px={{sm: '1rem', md: '1.5rem'}} py={{sm: '1rem', md: '2rem'}} borderRadius={{md: '1rem'}}
                    mx={{base: '1rem', md: '15%', lg: 'auto'}} maxW='800px'>
                    <Heading fontSize={{base: '1.25rem', md: '2rem'}} mb={{base: '1rem', lg: '3rem'}}>Welcome! Create a
                        new account.</Heading>
                    <Form onSubmit={handleSubmit} autoComplete='off'>
                        <Flex justifyContent='space-between' flexDirection={{base: 'column', md: 'row'}}>
                            <Box w={{base: '100%', md: '49%'}}>
                                <FormLabel htmlFor='name' width='100%' mb='0'>Name</FormLabel>
                                <CustomInput type='text' name='name' placeholder='Harvey Specter'/>
                            </Box>
                            <Box w={{base: '100%', md: '49%'}}>
                                <FormLabel htmlFor='email' width='100%' mb='0'
                                           mt={{base: '1rem', md: '0'}}>Email</FormLabel>
                                <CustomInput type='email' name='email' placeholder='harvey.specter@gmail.com'/>
                            </Box>
                        </Flex>
                        <Box>
                            <FormLabel htmlFor='password' width='100%' mb='0' mt='1rem'>Create Password</FormLabel>
                            <CustomInput type='password' name='password' placeholder='@qwrz4mxn7!'/>
                        </Box>
                        <Box>
                            <FormLabel htmlFor='passwordConfirmation' width='100%' mb='0' mt='1rem'>Confirm
                                Password
                            </FormLabel>
                            <CustomInput type='password' name='passwordConfirmation' placeholder='@qwrz4mxn7!'/>
                        </Box>
                        <Box>
                            <FormLabel htmlFor='address' width='100%' mb='0' mt='1rem'>Address</FormLabel>
                            <CustomInput type='text' name='address'
                                         placeholder='601 East 54th Street, New York City, New York'/>
                        </Box>
                        <Flex justifyContent='space-between' flexDirection={{base: 'column', md: 'row'}}>
                            <Box w={{base: '100%', md: '49%'}}>
                                <FormLabel htmlFor='pincode' width='100%' mb='0' mt='1rem'>Pincode</FormLabel>
                                <CustomInput type='number' name='pincode' placeholder='100001'/>
                            </Box>
                            <Box w={{base: '100%', md: '49%'}}>
                                <FormLabel htmlFor='phone' width='100%' mb='0' mt='1rem'>Phone Number</FormLabel>
                                <CustomInput type='number' name='phone' placeholder='9876543210'/>
                            </Box>
                        </Flex>
                        <Button w='100%' mt='1rem' bgColor='purple.500' color='white' _focus={{boxShadow: 'none'}}
                                _hover={{bgColor: 'purple.400'}} type='submit' isLoading={isSubmitting}>
                            Get Started
                        </Button>
                        {errors ? <Text textAlign='center' mt='2rem' color='gray'>{errors}</Text> : ''}
                        <Text textAlign='center' mt='0.75rem'>Already have an account?
                            <Link href='/login' style={{color: '#007BFF'}} ml={1}>Try Login
                            </Link>
                        </Text>
                    </Form>
                </Box>
            </Box>
        )}
        </Formik>
    </>);
};


export default Registration