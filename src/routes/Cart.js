import {
    Box, Button, Divider, Flex, Heading, Image, Img, Stack, Text, useToast,
} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import httpClient from "../utilities/httpClient";
import PC from "../assets/components/Nzxt-H510-Elite-Matte-Black-1.jpeg";
import Loading from "../components/Loading";
import EmptyCart from "../assets/empty_cart.svg"
import {Link, Redirect} from "react-router-dom";
import Error from "../components/Error";
import {InfoIcon} from "@chakra-ui/icons";

const Cart = () => {
    const [ordersInfo, setOrdersInfo] = useState([])
    const [didWeGetTheInfo, setDidWeGetTheInfo] = useState('loading')
    const [orderPlaced, setOrderPlaced] = useState(false)
    const toast = useToast();

    const handleClick = async () => {
        try {
            const res = await httpClient({
                method: 'POST', url: `${process.env.REACT_APP_API_HOST}/user/order/cart-items`,
            })
            if (res) {
                setOrderPlaced(true)
            }
        } catch (err) {
            console.log(err)
        }
    }

    const handleDelete = async (item) => {
        try {
            const result = await httpClient({
                method: 'DELETE', url: `${process.env.REACT_APP_API_HOST}/user/order/${item.id}`, data: item
            })
            if (result) {
                setOrdersInfo(ordersInfo.filter(i => i !== item))
                toast({
                    title: 'Successfully Removed to Cart!',
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

    useEffect(() => {
        const getOrder = async () => {
            try {
                const res = await httpClient({
                    method: 'GET', url: `${process.env.REACT_APP_API_HOST}/user/order/cart-items`,
                })
                if (res) {
                    setOrdersInfo(res.data.data)
                    setDidWeGetTheInfo('true')
                }
            } catch (err) {
                setDidWeGetTheInfo('false')
            }
        }
        getOrder()
    }, [])

    const conditionalRendering = () => {
        if (didWeGetTheInfo === 'loading') {
            return <>
                <Box maxW='1360px' mx='auto' py='0.5rem' px={{base: '1rem', md: '2rem'}}>
                    <Text fontSize='2rem' color='gray.500' fontWeight='semibold'>Cart</Text>
                    <Divider/>
                    <Loading/>
                </Box>
            </>
        }
        if (didWeGetTheInfo === 'null') {
            return <>
                <Box maxW='1360px' mx='auto' py='0.5rem' px={{base: '1rem', md: '2rem'}}>
                    <Box textAlign="center" py={10} px={6}>
                        <InfoIcon boxSize={'50px'} color={'blue.500'}/>
                        <Heading as="h2" size="xl" mt={6} mb={2}>
                            Your Cart is Empty.
                        </Heading>
                        <Text color={'gray.500'} as='u'>
                            <Link to='/build-custom-pc' color='blue.500'>Build your new custom PC now!</Link>
                        </Text>
                        <Img src={EmptyCart} maxW={{base: 'xs', md: 'sm'}} mx='auto' py={6} my={5}/>
                    </Box>
                </Box>
            </>
        }
        if (didWeGetTheInfo === 'true') {
            return (<>
                {orderPlaced && <Redirect to='/checkout'/>}
                {ordersInfo.length === 0 ? <Box maxW='1360px' mx='auto' py='0.5rem' px={{base: '1rem', md: '2rem'}}>
                    <Box textAlign="center" py={10} px={6}>
                        <InfoIcon boxSize={'50px'} color={'blue.500'}/>
                        <Heading as="h2" size="xl" mt={6} mb={2}>
                            Your Cart is Empty.
                        </Heading>
                        <Text color={'gray.500'} as='u'>
                            <Link to='/build-custom-pc' color='blue.500'>Build your new custom PC now!</Link>
                        </Text>
                        <Img src={EmptyCart} maxW={{base: 'xs', md: 'sm'}} mx='auto' py={6} my={5}/>
                    </Box>
                </Box> : <Box maxW='1360px' mx='auto' py='0.5rem' px={{base: '1rem', md: '2rem'}}>
                    <Flex justifyContent='space-between' pt={3}>
                        <Text fontSize='2rem' color='gray.500' fontWeight='semibold'>Cart</Text>
                        <Button bg='green.400' color='white'
                                onClick={handleClick}
                                mr={5}
                                _hover={{
                                    bg: 'green.500'
                                }}
                                _focus={{
                                    bg: 'green.400',
                                }}
                                rounded='full' fontWeight='semibold'>
                            Place Order
                        </Button>
                    </Flex>
                    <Divider/>
                    <Flex gap={4} flexWrap='wrap' py={6}>
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
                                    <Stack
                                        flex={1}
                                        flexDirection="column"
                                        justifyContent="start"
                                        alignItems="start"
                                        p={1}
                                        pt={2}>
                                        <Heading fontSize={'2xl'} fontFamily={'body'}>
                                            Custom PC
                                        </Heading>
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
                                    <Stack
                                        direction={'row'}
                                    >
                                        <Button
                                            fontSize={'xs'}

                                            rounded={'full'}
                                            bg={'red.400'}
                                            size='sm'
                                            color={'white'}
                                            onClick={() => handleDelete(item)}
                                            _hover={{
                                                bg: 'red.500',
                                            }}
                                            _focus={{
                                                bg: 'red.400',
                                            }}>
                                            Remove
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Box>)
                        })}
                    </Flex>
                </Box>}
            </>)
        }
        if (didWeGetTheInfo === 'false') {
            return <Error/>
        }
    }


    return (<>
            {conditionalRendering()}
        </>)
}

export default Cart