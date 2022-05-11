import {
    Avatar,
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue
} from "@chakra-ui/react";
import HeroImage from "../assets/heroimage.jpg"
import {Link} from "react-router-dom";
import Footer from "../components/Footer";
import StarterPC from "../assets/components/Nzxt-H210-Matte-Black-1.jpeg";
import StarterPCPlus from "../assets/prebuilds/h510flowwhite-1.jpg";
import FoundationPC from "../assets/components/Nzxt-H510-Elite-Matte-Black-1.jpeg";
import CreatorPC from "../assets/prebuilds/creator-pc.jpg";
import CreatorPCPlus from "../assets/prebuilds/creator-pc-plus.jpg";
import CreatorPCPro from "../assets/prebuilds/creator-pc-pro.jpg";

const Landing = () => {
    return (
        <>
            <Box maxW='1360px' mx='auto' py='0.5rem' px={{base: '1rem', md: '2rem'}}>
                <Stack direction={{base: 'column', md: 'row'}} my={4}>
                    <Flex p={12} flex={1} align={'center'} justify={'center'}>
                        <Stack spacing={4} w={'full'} maxW={'lg'}>
                            <Heading fontSize={{base: '3xl', md: '4xl', lg: '5xl'}}>
                                <Text color={'purple.500'} as={'span'} letterSpacing='1px'>
                                    Gaming PCs Made Simple
                                </Text>{' '}
                            </Heading>
                            <Text fontSize={{base: 'md', lg: 'lg'}} color={'gray.500'}>
                                Choose from curated parts and we’ll build it for you within 48 hours.
                            </Text>
                            <Stack direction={{base: 'column', md: 'row'}} spacing={4}>
                                <Link to='/build-custom-pc'>
                                    <Button
                                        rounded={'full'}
                                        bg={'purple.400'}
                                        color={'white'}
                                        _hover={{
                                            bg: 'purple.500',
                                        }}>
                                        Start Your Build
                                    </Button>
                                </Link>
                            </Stack>
                        </Stack>
                    </Flex>
                    <Flex flex={1}>
                        <Image
                            alt={'Login Image'}
                            objectFit={'cover'}
                            src={HeroImage}
                        />
                    </Flex>
                </Stack>

                <Box py={12}>
                    <Heading textAlign='center' fontSize='5xl' color='purple.400'>Shop Our Favorites</Heading>
                    <Flex rowGap={8} flexWrap='wrap' justifyContent='space-between'
                          flexDir={{base: 'column', md: 'row'}} py={8}>
                        <Box>
                            <Image src={CreatorPCPro} maxW='sm'></Image>
                            <Text fontWeight='bold' fontSize='xl' mt={2} color='gray.600'>Creator PC Pro</Text>
                            <Text fontWeight='semibold' fontSize='sm' pt={0} mt={0} color='gray.600'>$3200</Text>
                        </Box>
                        <Box>
                            <Image src={CreatorPCPlus} maxW='sm'></Image>
                            <Text fontWeight='bold' fontSize='xl' mt={2} color='gray.600'>Creator PC Plus</Text>
                            <Text fontWeight='semibold' fontSize='sm' pt={0} mt={0} color='gray.600'>$2800</Text>
                        </Box>
                        <Box>
                            <Image src={CreatorPC} maxW='sm'></Image>
                            <Text fontWeight='bold' fontSize='xl' mt={2} color='gray.600'>Creator PC</Text>
                            <Text fontWeight='semibold' fontSize='sm' pt={0} mt={0} color='gray.600'>$2400</Text>
                        </Box>
                        <Box>
                            <Image src={FoundationPC} maxW='sm'></Image>
                            <Text fontWeight='bold' fontSize='xl' mt={2} color='gray.600'>Foundation PC</Text>
                            <Text fontWeight='semibold' fontSize='sm' pt={0} mt={0} color='gray.600'>$2000</Text>
                        </Box>
                        <Box>
                            <Image src={StarterPCPlus} maxW='sm'></Image>
                            <Text fontWeight='bold' fontSize='xl' mt={2} color='gray.600'>Starter PC Plus</Text>
                            <Text fontWeight='semibold' fontSize='sm' pt={0} mt={0} color='gray.600'>$1800</Text>
                        </Box>
                        <Box>
                            <Image src={StarterPC} maxW='sm'></Image>
                            <Text fontWeight='bold' fontSize='xl' mt={2} color='gray.600'>Starter PC</Text>
                            <Text fontWeight='semibold' fontSize='sm' pt={0} mt={0} color='gray.600'>$1400</Text>
                        </Box>
                    </Flex>
                </Box>

                <Heading textAlign='center' fontSize='5xl' mb={4} color='purple.400'>Words from CEO</Heading>
                <Stack
                    bg={useColorModeValue('gray.50', 'gray.800')}
                    py={16}
                    px={8}
                    mb={8}
                    spacing={{base: 8, md: 10}}
                    align={'center'}
                    direction={'column'}>
                    <Text
                        fontSize={{base: 'md', md: 'lg'}}
                        textAlign={'center'}
                        maxW={'3xl'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis, leo vitae scelerisque
                        pellentesque, diam arcu volutpat massa, ut convallis diam orci quis est. Integer aliquet aliquam
                        aliquam. Vestibulum scelerisque nec diam sit amet facilisis. Cras dui neque, finibus pretium
                        metus vel, vehicula suscipit felis. Vivamus a erat odio.
                    </Text>
                    <Box textAlign={'center'}>
                        <Avatar
                            src={
                                'https://bit.ly/kent-c-dodds'
                            }
                            alt='Kent Dodds'
                            mb={2}
                        />

                        <Text fontWeight={600}>Kent Dodds</Text>
                        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
                            CEO
                        </Text>
                    </Box>
                </Stack>
            </Box>
            <Footer/>
        </>
    )
}

export default Landing