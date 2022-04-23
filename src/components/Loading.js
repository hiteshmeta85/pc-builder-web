import {Box, Spinner} from "@chakra-ui/react";

export const Loading = () => {
    return (
        <Box h='100vh'>
            <Spinner left='50%' position='absolute' top='40%' thickness="4px" speed="0.65s" emptyColor="gray.200"
                     color="blue.500" size="xl"/>
        </Box>
    )
}

export default Loading
