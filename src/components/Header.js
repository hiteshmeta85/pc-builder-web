import {
    Box,
    Button, Center,
    Flex,
    IconButton, Img, Menu,
    MenuButton,
    MenuGroup,
    MenuItem,
    MenuList,
    Text,
    useMediaQuery,
} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import {HamburgerIcon} from '@chakra-ui/icons';
import httpClient from "../utilities/httpClient";

const Header = ({isLoggedIn, setIsLoggedIn}) => {
    const [isLargerThan992] = useMediaQuery('(min-width: 992px)');
    console.log(isLoggedIn)

    const logout = async () => {
        try {
            let result = await httpClient({
                method: 'DELETE',
                url: `${process.env.REACT_APP_API_HOST}/user/session`,
            });
            if (result) {
                setIsLoggedIn(false)
                return true;
            }
        } catch (err) {
            return false;
        }
    };

    return (
        <Box boxShadow='0px 6px 4px -7px rgba(0,0,0,.5)' zIndex='1' position='sticky' top='0'>
            <Flex fontFamily='Avenir Next' fontWeight='500' bgColor='white'
                  justifyContent='space-between'
                  py='1rem' px={{base: '1rem', md: '2rem'}}
                  alignItems='center' maxW='1360px' mx='auto'>
                <Link to='/'>
                    <Center>
                        <Text fontWeight='bold' fontSize='1.25rem' pos='relative' top='4px'>NZXT</Text>
                    </Center>
                </Link>
                {isLargerThan992 ?
                    <Flex alignItems='center'>
                        <Text mr='1.5rem'><Link to='/'>Home</Link></Text>
                        <Text mr='1.5rem'><Link to='/contact-us'>Contact Us</Link></Text>
                        {isLoggedIn && <Text mr='1.5rem'><Link to='/previous-queries'>Previous Queries</Link></Text>}
                        <Text mr='1.5rem'><Link to='/build-custom-pc'>Custom PC</Link></Text>
                        <Text mr='1.5rem'><Link to='/recommendation'>Recommended Builds</Link></Text>
                        {!isLoggedIn && <>
                            <Text mr='1.5rem'><Link to='/login'>Login</Link></Text>
                            <Text mr='1.5rem'><Link to='/registration'>Registration</Link></Text>
                        </>}
                        {isLoggedIn &&
                            <>
                                <Text mr='1.5rem'><Link to='/order-history'>Order History</Link></Text>
                                <Text mr='1.5rem'><Link to='/cart'>Cart</Link></Text>
                                <Button onClick={logout} mr={{md: '1rem', lg: '1.5rem'}} bgColor='purple.500'
                                        color='white'
                                        _hover={{bgColor: 'purple.400'}} _focus={{boxShadow: 'none'}}>
                                    Logout
                                </Button>
                            </>}
                    </Flex>
                    :
                    <Menu>
                        <MenuButton bgColor='white' as={IconButton}
                                    _focus={{boxShadow: 'none', bgColor: 'white'}}
                                    icon={<HamburgerIcon/>}>
                        </MenuButton>
                        <MenuList>
                            <MenuGroup>
                                <Link to='/'><MenuItem>Home</MenuItem></Link>
                                <Link to='/contact-us'><MenuItem>Contact Us</MenuItem></Link>
                                {isLoggedIn && <Link to='/previous-queries'><MenuItem>Previous Queries</MenuItem></Link> }
                                <Link to='/build-custom-pc'><MenuItem>Custom PC</MenuItem></Link>
                                <Link to='/recommendation'><MenuItem>Recommended Builds</MenuItem></Link>
                                <Link to='/order-history'><MenuItem>Order History</MenuItem></Link>
                                <Link to='/cart'><MenuItem>Cart</MenuItem></Link>
                                {!isLoggedIn &&
                                    <>
                                        <Link to='/login'><MenuItem>Login</MenuItem></Link>
                                        <Link to='/registration'><MenuItem>Registration</MenuItem></Link>
                                    </>
                                }
                                {isLoggedIn &&
                                    <MenuItem onClick={logout}>Logout</MenuItem>
                                }
                            </MenuGroup>
                        </MenuList>
                    </Menu>
                }
            </Flex>
        </Box>
    );
};

export default Header;
