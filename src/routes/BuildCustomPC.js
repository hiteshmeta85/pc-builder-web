import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Divider,
  FormLabel,
  Grid,
  GridItem,
  Img,
  RadioGroup,
  Text
} from "@chakra-ui/react";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import components from "../constants/components";
import httpClient from "../utilities/httpClient";
import {useState} from "react";

const BuildCustomPC = ({isLoggedIn}) => {

  const [msg, setMsg] = useState('')

  return (
    <Formik
      initialValues={{
        Processor: '',
        Motherboard: '',
        RAM: '',
        Storage: '',
        Cabinet: '',
        Graphics: '',
      }}
      validationSchema={Yup.object({
        Processor: Yup.string().required('Please select a CPU.'),
        Motherboard: Yup.string().required('Please select a Motherboard.'),
        RAM: Yup.string().required('Please select RAM.'),
        Storage: Yup.string().required('Please select a secondary storage.'),
        Cabinet: Yup.string().required('Please select a Cabinet.'),
        Graphics: Yup.string().required('Please select a Graphics card.'),
      })}
      onSubmit={async (values, {setSubmitting, resetForm}) => {
        setSubmitting(false);
        try {
          const response = await httpClient({
            method: 'POST',
            url: `${process.env.REACT_APP_API_HOST}/user/order`,
            data: values
          })
          if (response.status === 200) { // 200 is OK
            setMsg('Successfully added your custom PC to cart.')
            resetForm()
          }
          if (response.status === 400) {
            console.log(response)
          }
        } catch (err) {
          console.log(err)
        }
      }}
    >{({
         handleSubmit, isSubmitting, handleChange, values
       }) => (<Box maxW='1360px' mx='auto' pt='0.5rem' pb='4rem' px={{base: '1rem', md: '2rem'}}>
      <Grid templateColumns='repeat(6, 1fr)' gap={8} py={8}>
        <GridItem colSpan={{base: 6, lg: 4}}>
          <Form onSubmit={handleSubmit}>
            <Accordion allowMultiple>
              {components.map((item) => {
                return (<AccordionItem key={item.id}>
                  <h2>
                    <AccordionButton _focus={{boxShadow: 'none'}} bg='purple.400' _hover={{bg: 'purple.500'}} py={3} color='white'>
                      <Box flex='1' textAlign='left'>
                        {item.type}
                      </Box>
                      <AccordionIcon/>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} borderX='1px solid purple'>
                    <RadioGroup display='flex' flexWrap='wrap' justifyContent='space-evenly' onChange={handleChange}>
                      {item.list.map((component) => {
                        return (<Box key={component.id} mt={2} mr={4} w={"sm"}>
                          <Img w={60} objectFit='cover' src={component.image_url}/>
                          <FormLabel htmlFor={component.name} mb={0}>
                            <Text as='span' fontWeight='medium' letterSpacing='1px'>{component.name}</Text>
                          </FormLabel>
                          <Text>
                            ${component.price}
                          </Text>
                          <Field
                            value={component.name}
                            name={item.type}
                            type='radio'
                            onChange={handleChange}
                          />
                        </Box>)
                      })}
                    </RadioGroup>
                  </AccordionPanel>
                </AccordionItem>)
              })}
            </Accordion>
            <Button
              borderRadius={0}
              isLoading={isSubmitting}
              type='submit'
              mt={3}
              py={4}
              bg='green.400'
              color='white'
              _hover={{bg: 'green.500'}}
              w='xs'
              _focus={{outline: 'none'}}
              disabled={!isLoggedIn}
            >
              Add to Cart
            </Button>
            {!isLoggedIn && <Text w='xs' align='center' fontWeight='semibold' color='gray.500' fontSize='sm' mt={1}>Login
              required.</Text>}
            <Box my={3}>
              {components.map((item) => {
                return (<Box color='gray.500' mt={1} mb={1} fontSize='sm' fontWeight='semibold' key={item.type}>
                  <ErrorMessage name={item.type}/>
                </Box>)
              })}
            </Box>
            {msg && <Text color='green.500' fontWeight='semibold'>{msg}</Text>}
          </Form>
        </GridItem>
        <GridItem colSpan={{base: 6, lg: 2}}>
          <Box border='1px solid gray' py={3} px={3}>
            <Box mb={6}>
              <Text fontWeight='semibold'>Components</Text>
            </Box>
            <>
              <Box mb={3}>
                <Text fontWeight='semibold' color='purple.500'>CPU</Text>
                <Text fontSize='sm' my={0}>{values.Processor}</Text>
                <Divider/>
              </Box>
              <Box mb={3}>
                <Text fontWeight='semibold' color='purple.500'>Motherboard</Text>
                <Text fontSize='sm' my={0}>{values.Motherboard}</Text>
                <Divider/>
              </Box>
              <Box mb={3}>
                <Text fontWeight='semibold' color='purple.500'>RAM</Text>
                <Text fontSize='sm' my={0}>{values.RAM}</Text>
                <Divider/>
              </Box>
              <Box mb={3}>
                <Text fontWeight='semibold' color='purple.500'>Storage</Text>
                <Text fontSize='sm' my={0}>{values.Storage}</Text>
                <Divider/>
              </Box>
              <Box mb={3}>
                <Text fontWeight='semibold' color='purple.500'>Cabinet</Text>
                <Text fontSize='sm' my={0}>{values.Cabinet}</Text>
                <Divider/>
              </Box>
              <Box mb={3}>
                <Text fontWeight='semibold' color='purple.500'>Graphics</Text>
                <Text fontSize='sm' my={0}>{values.Graphics}</Text>
                <Divider/>
              </Box>
            </>
          </Box>
        </GridItem>
      </Grid>
    </Box>)}
    </Formik>
  )
}

export default BuildCustomPC