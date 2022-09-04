import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import {Box, Button, Flex, FormLabel, Heading, Text} from '@chakra-ui/react';
import {useEffect, useState} from "react";
import Error from "../components/Error";
import CustomInput from "../components/CustomInput";
import Loading from "../components/Loading";
import httpClient from "../utilities/httpClient";
import profileSchema from "../lib/schemas/profileSchema";


const Profile = () => {

  const [userInfo, setUserInfo] = useState([])
  const [didWeGetInfo, setDidWeGetInfo] = useState('loading')
  const [msg, setMsg] = useState('')

  useEffect(() => {
    const getAccountDetails = async () => {
      try {
        const res = await httpClient({
          method: 'GET',
          url: `${process.env.REACT_APP_API_HOST}/user`,
        })
        setUserInfo(res.data.data)
        setDidWeGetInfo('true')
      } catch (err) {
        setDidWeGetInfo('false')
      }
    }
    getAccountDetails()
  }, [])

  const conditionalRendering = () => {
    if (didWeGetInfo === 'loading') {
      return <Loading/>
    }
    if (didWeGetInfo === 'true') {
      return (<>
        <Formik
          initialValues={{
            name: userInfo.name,
            email: userInfo.email,
            password: userInfo.password,
            address: userInfo.address,
            pincode: userInfo.pincode,
            phone: userInfo.phone,
          }}
          validationSchema={profileSchema}
          onSubmit={async (values, {setSubmitting}) => {
            setSubmitting(false);
            const payload = {
              name: values.name,
              password: values.password,
              address: values.address,
              pincode: values.pincode,
              phone: values.phone
            }
            try {
              const res = await httpClient({
                method: 'PUT',
                url: `${process.env.REACT_APP_API_HOST}/user`,
                data: payload
              })
              setMsg(res.data.data)
            } catch (err) {
              setMsg(err.response.data.errors)
            }
          }}
        >{({
             handleSubmit,
             dirty,
             isValid
           }) => (
          <>
            <Box py='3rem'>
              <Box bgColor='white' py={{md: '1.5rem', lg: '2rem'}} px={{md: '2rem'}} mx={{base: '1rem', md: '15%', lg: '20%'}} maxW='900px' borderRadius={{md: '1rem'}}>
                <Heading fontSize={{base: '1.25rem', md: '2rem'}} mb='1.5rem'>
                    Edit Profile
                </Heading>
                <Form onSubmit={handleSubmit}>
                  <Flex justifyContent='space-between' flexDirection={{base: 'column', md: 'row'}}>
                    <Box w={{base: '100%', md: '49%'}}>
                      <FormLabel htmlFor='name' width='100%' mb='0'>
                          Name
                      </FormLabel>
                      <CustomInput type='text' name='name' placeholder='Harvey Specter'/>
                    </Box>
                    <Box w={{base: '100%', md: '49%'}}>
                      <FormLabel htmlFor='email' width='100%' mb='0' mt={[1, 0]}>
                          Email
                      </FormLabel>
                      <CustomInput type='email' name='email' placeholder='harvey.specter@gmail.com' isDisabled={true}/>
                    </Box>
                  </Flex>
                  <Box>
                    <FormLabel htmlFor='password' width='100%' mb='0' mt='1rem'>
                        Current Password
                    </FormLabel>
                    <CustomInput type='text' name='password' placeholder='@qwrz4mxn7!'/>
                  </Box>
                  <Box>
                    <FormLabel htmlFor='address' width='100%' mb='0' mt='1rem'>
                        Address
                    </FormLabel>
                    <CustomInput type='text' name='address' placeholder='601 East 54th Street, New York City, New York'/>
                  </Box>
                  <Flex justifyContent='space-between' flexDirection={{base: 'column', md: 'row'}}>
                    <Box w={{base: '100%', md: '49%'}}>
                      <FormLabel htmlFor='pincode' width='100%' mb='0' mt='1rem'>Pincode</FormLabel>
                      <CustomInput type='number' name='pincode' placeholder='100001'/>
                    </Box>
                    <Box w={{base: '100%', md: '49%'}}>
                      <FormLabel htmlFor='number' width='100%' mb='0' mt='1rem'>
                        Contact Number
                      </FormLabel>
                      <CustomInput type='number' name='phone' placeholder='9876543210'/>
                    </Box>
                  </Flex>
                  <Button w='100%' mt='1rem' bgColor='purple.500' color='white' _hover={{bg: 'purple.400'}} disabled={!(dirty && isValid)} type='submit'>Save</Button>
                </Form>
                <Text textAlign='center' mt='1rem' color='gray'>{msg}</Text>
              </Box>
            </Box>
          </>
        )}
        </Formik>
      </>)
    }
    if (didWeGetInfo === 'false') {
      return <Error/>
    }
  }

  return (
    <>{conditionalRendering()}</>
  );
};

export default Profile;