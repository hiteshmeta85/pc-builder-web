import {
    Box,
    Button,
    Divider,
    Img,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    useToast,
    Tr
} from "@chakra-ui/react";
import prebuilds from "../JSON/prebuilds";
import httpClient from "../utilities/httpClient";

const Prebuild = () => {
    const toast = useToast();

    const handleClick = async (value) => {
        console.log(value.specs[0])
        try {
            const result = await httpClient({
                method: 'POST',
                url: `${process.env.REACT_APP_API_HOST}/user/order`,
                data: value.specs[0]
            })
            if (result) {
                toast({
                    title: 'Successfully Added to Cart!',
                    position: 'bottom-right',
                    status: 'success',
                    duration: 4000,
                    isClosable: true,
                });
            }
        } catch (err) {
            toast({
                title: 'Something went wrong.',
                position: 'bottom-right',
                status: 'error',
                duration: 4000,
                isClosable: true,
            });
        }
    }

    return (
        <>
            <Box maxW='1360px' mx='auto' px={{base: '1rem', md: '2rem'}} py={12}>
                <Text bgClip='text' bgGradient='linear(to-l, purple.300, purple.900)' lineHeight='100%'
                      fontSize={{base: '2rem', lg: '5rem'}}
                      textAlign='center' fontWeight='semibold' letterSpacing='2px'>
                    Pre Build PCs
                </Text>
                <Text textAlign='center' fontSize='1.2rem' mb='2rem' color='gray.500'>Power the imagination.</Text>
                <Divider/>

                {prebuilds.map((item) => {
                    return (
                        <Box py={8} key={item.id}>
                            <Text bgClip='text' bgGradient='linear(to-l, gray.300, gray.900)' lineHeight='120%'
                                  fontSize={{base: '2rem', lg: '4rem'}}
                                  textAlign='center' fontWeight='semibold' letterSpacing='2px'>
                                {item.type}
                            </Text>
                            <TableContainer>
                                <Table>
                                    <Thead>
                                        <Tr>
                                            {item.list.map((pc) => {
                                                return (
                                                    <Th key={pc.id}>
                                                        <Img src={pc.image_url} w={{md: '400px'}} h={{md: '500px'}}
                                                             objectFit='contain'/>
                                                    </Th>
                                                )
                                            })}
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            {item.list.map((pc) => {
                                                return (
                                                    <Td key={pc.id} fontWeight='semibold'
                                                        fontSize='1.2rem'>{pc.name}</Td>
                                                )
                                            })}
                                        </Tr>
                                        <Tr>
                                            {item.list.map((pc) => {
                                                return (
                                                    <Td key={pc.id} fontWeight='semibold'>{pc.price}</Td>
                                                )
                                            })}
                                        </Tr>
                                        <Tr>
                                            {item.list.map((pc) => {
                                                return (
                                                    <Td key={pc.id}>{pc.specs[0].Processor}</Td>
                                                )
                                            })}
                                        </Tr>
                                        <Tr>
                                            {item.list.map((pc) => {
                                                return (
                                                    <Td key={pc.id}>{pc.specs[0].Graphics}</Td>
                                                )
                                            })}
                                        </Tr>
                                        <Tr>
                                            {item.list.map((pc) => {
                                                return (
                                                    <Td key={pc.id}>{pc.specs[0].RAM}</Td>
                                                )
                                            })}
                                        </Tr>
                                        <Tr textOverflow='break-word'>
                                            {item.list.map((pc) => {
                                                return (
                                                    <Td key={pc.id}>{pc.specs[0].Storage}</Td>
                                                )
                                            })}
                                        </Tr>
                                        <Tr textOverflow='break-word'>
                                            {item.list.map((pc) => {
                                                return (
                                                    <Td key={pc.id}>{pc.specs[0].Cabinet}</Td>
                                                )
                                            })}
                                        </Tr>
                                        <Tr>
                                            {item.list.map((pc) => {
                                                return (
                                                    <Td key={pc.id}>{pc.specs[0].Motherboard}</Td>
                                                )
                                            })}
                                        </Tr>
                                        <Tr textOverflow='break-word'>
                                            {item.list.map((pc) => {
                                                return (
                                                    <Td key={pc.id}>
                                                        <Button bg='purple.500' _hover={{bg: 'purple.600'}}
                                                                _focus={{boxShadow: 'none'}}
                                                                onClick={() => handleClick(pc)}
                                                                color='white' rounded='full' px={6}
                                                                py={2}>
                                                            Add to Cart
                                                        </Button>
                                                    </Td>
                                                )
                                            })}
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </Box>
                    )
                })}
            </Box>
        </>
    )
}

export default Prebuild