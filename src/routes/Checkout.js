import {Box, Heading, Img, Text} from '@chakra-ui/react';
import {CheckCircleIcon} from '@chakra-ui/icons';
import OrderPlaced from "../assets/order_placed.svg"
import {Link} from 'react-router-dom';

const Checkout = () => {
    return (
        <>
            <Box maxW='1360px' mx='auto' py='0.5rem' px={{base: '1rem', md: '2rem'}}>
                <Box textAlign="center" py={10} px={6}>
                    <CheckCircleIcon boxSize={'50px'} color={'green.500'}/>
                    <Heading as="h2" size="xl" mt={6} mb={2}>
                        Congratulations! Order Placed Successfully.
                    </Heading>
                    <Text color={'gray.500'} as='u'>
                        <Link to='/order-history' color='blue.500'>View Order History</Link>
                    </Text>
                    <Img src={OrderPlaced} maxW={"md"} mx='auto' py={6} my={5}/>
                </Box>
            </Box>
        </>
    )
}

export default Checkout