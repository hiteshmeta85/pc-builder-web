import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Img,
  Text,
  Textarea
} from "@chakra-ui/react";
import SupportLogo from '../assets/support.svg';
import * as Yup from "yup";
import {Form, Formik} from "formik";
import CustomInput from "../components/CustomInput";
import {useState} from "react";
import httpClient from "../utilities/httpClient";
import Footer from "../components/Footer";
import {Faq} from "../constants/faq";
import contactSchema from "../lib/schemas/contactSchema";

const ContactUs = (props) => {

  const [serverResponse, setServerResponse] = useState('')

  return (<>
    <Box maxW='1360px' mx='auto' px={{base: '1rem', md: '2rem'}} py={{base: 4, md: 16}}>
      <Flex flexDir={{base: 'column', md: 'row'}} px={4} justifyContent='space-evenly' py={8} bg='gray.50' maxW='container.lg' mx='auto' rounded={8}>
        <Box minW={{lg: 'lg'}}>
          <Text fontSize='4rem' fontWeight='semibold'>Support</Text>
          <Text>Find customer support and FAQ.</Text>
        </Box>
        <Img src={SupportLogo} maxW='xs' py={{base: 4, md: 0}}/>
      </Flex>
      <Formik
        initialValues={{
          title: '',
          description: ''
        }}
        validationSchema={contactSchema}
        onSubmit={async (values, {setSubmitting, resetForm}) => {
          setSubmitting(false);
          const payload = {title: values.title, description: values.description}
          try {
            const response = await httpClient({
              method: 'POST', url: `${process.env.REACT_APP_API_HOST}/user/query`, data: payload
            })
            if (response.status === 200) {
              setServerResponse(response.data.data)
              resetForm();
            }
          } catch (err) {
            setServerResponse(err.response.data.errors)
          }
        }}
      >{({
           handleSubmit, handleChange, handleBlur, values, errors, touched
         }) => (<Box py='2rem' maxW='container.lg' mx='auto'>
        <Box px={{md: 6}} maxW='800px' py={{md: '1.5rem', lg: '2rem'}}>
          <Heading fontWeight='semibold' fontSize='2rem'
                   mb='1rem'>Contact Us</Heading>
          <Form onSubmit={handleSubmit}>
            <Box mb='1rem'>
              <FormLabel marginBottom='0.25rem' htmlFor='shortDescription' width='100%' mb='0'>Title</FormLabel>
              <CustomInput type='text' name='title' placeholder='Subject'/>
            </Box>
            <Box>
              <FormLabel marginBottom='0.25rem' htmlFor='description' width='100%' mb='0'>
                Description
              </FormLabel>
              <Textarea rows='8' name='description' onChange={handleChange} onBlur={handleBlur} value={values.description} placeholder='Message'/>
              <Box color="purple.400" mx={1}>
                {errors.description && touched.description && errors.description}
              </Box>
            </Box>
            <Button w='100%' mt='1rem' bgColor='purple.500' color='white' _hover={{bg: 'purple.400'}} disabled={!props.isLoggedIn} type='submit'>Send</Button>
            {!props.isLoggedIn && <Text textAlign='center' color='gray' my={1}>Login required.</Text>}
          </Form>
          {serverResponse ?
            <Text textAlign='center' mt='1rem' color='gray.500'>{serverResponse}</Text> : ''}
        </Box>
      </Box>)}
      </Formik>
      <Box bg={'purple.400'} pt={[12,20]} pb={[16,24]} rounded={8}>
        <Accordion allowMultiple maxW='container.lg' mx='auto' my={2} px={{md: 4}}>
          <Text color={'white'} fontSize='2rem' fontWeight='semibold' my={2}>FAQ's</Text>
          {Faq.map((item) => {
            return (<AccordionItem key={item.id} bg={'white'}>
              <h2>
                <AccordionButton _focus={{boxShadow: 'none'}}>
                  <Box flex='1' textAlign='left' fontWeight='semibold' py={2}>
                    {item.title}
                  </Box>
                  <AccordionIcon/>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {item.description}
              </AccordionPanel>
            </AccordionItem>)
          })}
        </Accordion>
      </Box>
    </Box>
    <Footer/>
  </>)
}

export default ContactUs