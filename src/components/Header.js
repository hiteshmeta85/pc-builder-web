import {
  Box,
  Button,
  Center,
  Flex,
  IconButton,
  Menu,
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
import Logo from "./Logo";

const Header = ({isLoggedIn, setIsLoggedIn}) => {
  const [isLargerThan992] = useMediaQuery('(min-width: 992px)');

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
      {/*{isLoggedIn? true: <Redirect to='/'/>}*/}
      <Flex fontFamily='Avenir Next' fontWeight='500' bgColor='white'
            justifyContent='space-between'
            py='1rem' px={{base: '1rem', md: '2rem'}}
            alignItems='center' maxW='1360px' mx='auto'>
        <Link to='/'>
          <Center>
            <Logo/>
          </Center>
        </Link>
        {isLargerThan992 ?
          <Flex alignItems='center'>
            <Text mr='1.5rem'><Link to='/'>Home</Link></Text>
            <Text mr='1.5rem'><Link to='/contact-us'>Support</Link></Text>
            {isLoggedIn && <Text mr='1.5rem'><Link to='/previous-queries'>Previous Queries</Link></Text>}
            <Text mr='1.5rem'><Link to='/build-custom-pc'>Custom</Link></Text>
            <Text mr='1.5rem'><Link to='/prebuild'>Prebuild PCs</Link></Text>
            {!isLoggedIn && <>
              <Text mr='1.5rem'><Link to='/login'>Login</Link></Text>
              <Text mr='1.5rem'><Link to='/registration'>Registration</Link></Text>
            </>}
            {isLoggedIn &&
              <>
                <Text mr='1.5rem'><Link to='/order-history'>Order History</Link></Text>
                <Text mr='1.5rem'><Link to='/cart'>Cart</Link></Text>
                <Text mr='1.5rem'><Link to='/profile'>Profile</Link></Text>
                <Button onClick={logout} mr={{md: '1rem', lg: '1.5rem'}} bgColor='purple.500' color='white' _hover={{bgColor: 'purple.400'}} _focus={{boxShadow: 'none'}}>
                  Logout
                </Button>
              </>}
          </Flex>
          :
          <Menu>
            <MenuButton bgColor='white' as={IconButton} _focus={{boxShadow: 'none', bgColor: 'white'}} icon={<HamburgerIcon/>}>
            </MenuButton>
            <MenuList>
              <MenuGroup>
                <Link to='/'><MenuItem>Home</MenuItem></Link>
                <Link to='/contact-us'><MenuItem>Support</MenuItem></Link>
                {isLoggedIn &&
                  <Link to='/previous-queries'><MenuItem>Previous Queries</MenuItem></Link>}
                <Link to='/build-custom-pc'><MenuItem>Custom</MenuItem></Link>
                <Link to='/prebuild'><MenuItem>Prebuild PCs</MenuItem></Link>
                <Link to='/order-history'><MenuItem>Order History</MenuItem></Link>
                <Link to='/cart'><MenuItem>Cart</MenuItem></Link>
                <Link to='/profile'><MenuItem>Profile</MenuItem></Link>
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
