import {Box, Button, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";

export const Error = () => {
    return (<Box textAlign='center' mt='5rem' px='0.5rem'>
        <Text fontSize='3rem'>401 - Unauthorized Access</Text>
        <Button px={4} py={2} my={2} rounded='full' color='white' bg='#0C6EFD'
              fontSize='1.25rem' _hover={{bg:'blue.600'}}>
            <Link to='/login'><span>Login</span></Link>
        </Button>
    </Box>)
}

export default Error