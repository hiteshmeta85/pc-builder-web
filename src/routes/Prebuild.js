import {Box, Button, Divider, Img, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr} from "@chakra-ui/react";
import StarterPC from "../assets/prebuilds/starter-pc.jpg";
import prebuilds from "../JSON/prebuilds";

const Prebuild = () => {
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
                            {/*<Text textAlign='center' fontSize='1.2rem' mb='1rem' color='gray.500'>Discover the joy of PC*/}
                            {/*    Gaming.</Text>*/}
                            <TableContainer>
                                <Table>
                                    <Thead>
                                        <Tr>
                                            {item.list.map((pc) => {
                                                return (
                                                    <Th key={pc.id}>
                                                        {/*src={require('../assets/prebuilds/creator-pc-pro.jpg',)}*/}
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
                                                    <Td key={pc.id}>{pc.specs[0].cpu}</Td>
                                                )
                                            })}
                                        </Tr>
                                        <Tr>
                                            {item.list.map((pc) => {
                                                return (
                                                    <Td key={pc.id}>{pc.specs[0].gpu}</Td>
                                                )
                                            })}
                                        </Tr>
                                        <Tr>
                                            {item.list.map((pc) => {
                                                return (
                                                    <Td key={pc.id}>{pc.specs[0].ram}</Td>
                                                )
                                            })}
                                        </Tr>
                                        <Tr textOverflow='break-word'>
                                            {item.list.map((pc) => {
                                                return (
                                                    <Td key={pc.id}>{pc.specs[0].storage}</Td>
                                                )
                                            })}
                                        </Tr>
                                        <Tr textOverflow='break-word'>
                                            {item.list.map((pc) => {
                                                return (
                                                    <Td key={pc.id}>
                                                        <Button bg='purple.500' _hover={{bg: 'purple.600'}}
                                                                _focus={{boxShadow: 'none'}}
                                                                color='white' rounded='full' px={6}
                                                                py={2}>
                                                            View
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