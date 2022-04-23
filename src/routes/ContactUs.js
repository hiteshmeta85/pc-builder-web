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

const ContactUs = (props) => {

    const [serverResponse, setServerResponse] = useState('')

    const FAQ_Question = [{
        id: 1,
        title: 'What is an Extended Warranty? Who handles my warranty claim?',
        description: 'An extended warranty extends your pre-existing warranty after our manufacturer\'s warranty has expired. After our two-year limited warranty ends, you can still receive in-warranty services and repairs for your PC. This extended warranty is covered by Extend and can add up to 4 years to your PC warranty.'
    }, {
        id: 2,
        title: 'What is the warranty for NZXT Gaming PCs?',
        description: 'All new Gaming PCs sold by NZXT are covered under our 2-Year Warranty.'
    }, {
        id: 3,
        title: 'Do I have to pay for shipping for warranty repair if I live outside the United States or Canada?',
        description: 'BLD does not currently sell systems outside of the United States and Canada. If you purchased your BLD system in the United States or Canada but now live outside of these regions and require repair, you will be responsible for all charges relating to shipping.'
    }, {
        id: 4,
        title: 'Games Incompatible with Alder Lake CPUs.',
        description: 'With the new Alder Lake CPUs from Intel (12th Gen), issues with compatibility with some games. This issue has been triggered by many games, with DRM mistakenly identifying some of the cores of your processor as a separate system.  DRM (or digital rights management) is included with many games to protect the developers from video game piracy.'
    }]

    return (<>
            <Box maxW='1360px' mx='auto' px={{base: '1rem', md: '2rem'}} py={{base: 4, md: 16}}>
                <Flex
                    bgGradient={['linear(to-t, gray.50, gray.100)', 'linear(to-b, gray.50, gray.100)',]}
                    flexDir={{base: 'column', md: 'row'}} px={4} justifyContent='space-evenly' py={8}
                    bg='gray.50'
                    maxW='container.lg' mx='auto' rounded={8}>
                    <Box minW={{lg: 'lg'}}>
                        <Text fontSize='4rem' fontWeight='semibold'>Support</Text>
                        <Text>Find customer support and FAQ.</Text>
                    </Box>
                    <Img src={SupportLogo} maxW='xs' py={{base: 4, md: 0}}/>
                </Flex>
                <Formik
                    initialValues={{
                        title: '', description: ''
                    }}
                    validationSchema={Yup.object({
                        title: Yup.string().required('Title Required.'),
                        description: Yup.string().required('Description Required.'),
                    })}
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
                            <Box color='gray.500'>
                                <Box mb='1rem'>
                                    <Text fontSize='sm' textAlign='justify'>
                                        NZXT has one of the best customer services. Feel free to contact us. If you have any questions, or are experiencing any difficulties, then we are here to help. You can write us your
                                        queries, and we'll respond to them as soon as possible. </Text>
                                </Box>
                            </Box>
                            <Form onSubmit={handleSubmit}>
                                <Box mb='1rem'>
                                    <FormLabel marginBottom='0.25rem' htmlFor='shortDescription' width='100%'
                                               mb='0'>Title</FormLabel>
                                    <CustomInput type='text' name='title' placeholder='Subject'/>
                                </Box>
                                <Box>
                                    <FormLabel marginBottom='0.25rem' htmlFor='description' width='100%' mb='0'>
                                        Description
                                    </FormLabel>
                                    <Textarea rows='8' name='description' onChange={handleChange}
                                              onBlur={handleBlur}
                                              value={values.description}
                                              placeholder='Message'/>
                                    <Box color="purple.400" mx={1}>
                                        {errors.description && touched.description && errors.description}
                                    </Box>
                                </Box>
                                {/*<Flex justifyContent='space-between' flexDirection={{base: 'column', md: 'row'}} my={3}>
                                    <Box w={{base: '100%', md: '49%'}}>
                                        <FormLabel htmlFor='name' width='100%' marginBottom='0.25rem'>Name</FormLabel>
                                        <CustomInput type='text' name='name' placeholder='John Doe'/>
                                    </Box>
                                    <Box w={{base: '100%', md: '49%'}}>
                                        <FormLabel htmlFor='email' width='100%' marginBottom='0.25rem'
                                                   mt={{base: '1rem', md: '0'}}>Email</FormLabel>
                                        <CustomInput type='email' name='email' placeholder='john@gmail.com'/>
                                    </Box>
                                </Flex>*/}
                                <Button w='100%' mt='1rem' bgColor='purple.500' color='white'
                                        _hover={{bg: 'purple.400'}} disabled={!props.isLoggedIn}
                                        type='submit'>Send</Button>
                                {!props.isLoggedIn && <Text textAlign='center' color='gray' my={1}>Login required.</Text>}
                            </Form>
                            {serverResponse ?
                                <Text textAlign='center' mt='1rem' color='gray.500'>{serverResponse}</Text> : ''}
                        </Box>
                    </Box>)}
                </Formik>
                <Accordion allowMultiple maxW='container.lg' mx='auto' my={2} px={{md: 4}}>
                    <Text fontSize='2rem' fontWeight='semibold' my={2} px={4}>FAQ's</Text>
                    {FAQ_Question.map((item) => {
                        return (<AccordionItem key={item.id}>
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
        </>)
}

export default ContactUs