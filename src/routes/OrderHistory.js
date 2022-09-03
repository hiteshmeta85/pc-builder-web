import Error from "../components/Error";
import {Box, Divider, Flex, Heading, Image, Img, Link, SimpleGrid, Stack, Text} from '@chakra-ui/react';
import {useEffect, useState} from "react";
import Loading from "../components/Loading";
import httpClient from "../utilities/httpClient";
import EmptyCart from "../assets/no_order_history.svg";
import PC from "../assets/components/Nzxt-H510-Elite-Matte-Black-1.jpeg";

const OrderHistory = () => {
    const [ordersInfo, setOrdersInfo] = useState([])
    const [didWeGetTheInfo, setDidWeGetTheInfo] = useState('loading')

    useEffect(() => {
        const getOrder = async () => {
            try {
                const res = await httpClient({
                    method: 'GET',
                    url: `${process.env.REACT_APP_API_HOST}/user/order`,
                })
                if (res) {
                    console.log(res.data)
                }
                if (res.data.data.length !== 0) {
                    setOrdersInfo(res.data.data)
                    setDidWeGetTheInfo('true')
                } else {
                    setDidWeGetTheInfo('null')
                }
            } catch (err) {
                setDidWeGetTheInfo('false')
            }
        }
        getOrder()
    }, [])

    const conditionalRendering = () => {
        if (didWeGetTheInfo === 'loading') {
            return (<>
                <Box maxW='1360px' mx='auto' py='0.5rem' px={{base: '1rem', md: '2rem'}}>
                    <Text fontSize='2rem' color='gray.500' fontWeight='semibold'>Cart</Text>
                    <Divider/>
                    <Loading/>
                </Box>
            </>)
        }
        if (didWeGetTheInfo === 'true') {
            return (<>
                <Box maxW='1360px' mx='auto' py='0.5rem' px={{base: '1rem', md: '2rem'}}>
                    <Flex justifyContent='space-between' pt={3}>
                        <Text fontSize='2rem' color='gray.500' fontWeight='semibold'>Order History</Text>
                    </Flex>
                    <Divider/>
                    <SimpleGrid columns={{base: 1, md: 2, lg: 3, xl: 4}} gap={4} flexWrap='wrap' py={6}>
                        {ordersInfo.map((item) => {
                            return (<Box boxShadow={'md'} borderWidth="1px"
                                         borderRadius="lg" key={item.id}>
                                <Stack
                                    direction='column'
                                    padding={4}
                                    justifyContent='space-between'
                                >
                                    <Flex flex={1}>
                                        <Image
                                            objectFit="cover"
                                            boxSize="100%"
                                            src={PC}
                                            maxW='2xs'
                                        />
                                    </Flex>
                                    <Divider/>
                                    <Stack
                                        flex={1}
                                        flexDirection="column"
                                        justifyContent="start"
                                        alignItems="start"
                                        px={2}
                                        pt={6}
                                        pb={3}
                                    >
                                        <Text
                                            textAlign={'start'}
                                        >
                                            <Text as='span' color='black' fontWeight='600'>Order
                                                Id:</Text> #0000{item.id}
                                        </Text>
                                        <Box fontWeight={600} color={'gray.500'} fontSize="sm" mb={4}>
                                            <Text
                                                textAlign={'start'}
                                            >
                                                <Text as='span' color='black'>Processor:</Text> {item.Processor}
                                            </Text>
                                            <Text
                                                textAlign={'start'}
                                            >
                                                <Text as='span'
                                                      color='black'>Motherboard:</Text> {item.Motherboard}
                                            </Text>
                                            <Text
                                                textAlign={'start'}
                                            >
                                                <Text as='span' color='black'>RAM:</Text> {item.RAM}
                                            </Text>
                                            <Text
                                                textAlign={'start'}
                                            >
                                                <Text as='span' color='black'>Cabinet:</Text> {item.Cabinet}
                                            </Text>
                                            <Text
                                                textAlign={'start'}
                                            >
                                                <Text as='span' color='black'>Storage:</Text> {item.Storage}
                                            </Text>
                                            <Text
                                                textAlign={'start'}
                                            >
                                                <Text as='span' color='black'>Graphics:</Text> {item.Graphics}
                                            </Text>
                                        </Box>
                                    </Stack>
                                </Stack>
                            </Box>)
                        })}
                    </SimpleGrid>
                </Box>
            </>)
        }
        if (didWeGetTheInfo === 'null') {
            return (
                <>
                    <Box maxW='1360px' mx='auto' py='0.5rem' px={{base: '1rem', md: '2rem'}}>
                        <Box textAlign="center" py={10} px={6}>
                            <Heading as="h2" size="xl" mt={6} mb={2}>
                                You haven't ordered anything yet.
                            </Heading>
                            <Text color={'gray.500'} as='u'>
                                <Link to='/build-custom-pc' color='blue.500'>Build your new custom PC now!</Link>
                            </Text>
                            <Img src={EmptyCart} maxW={{base: 'xs', md: 'sm'}} mx='auto' py={6} my={5}/>
                        </Box>
                    </Box>
                </>
            )
        }
        if (didWeGetTheInfo === 'false') {
            return <Error/>
        }
    }

    return (
        <>{conditionalRendering()}</>
    )
}

export default OrderHistory
