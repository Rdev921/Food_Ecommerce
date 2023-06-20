import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Grid,
  Collapse,
  Icon,
  MenuButton,
  Menu,
  MenuList,
  Avatar,
  Center,
  MenuDivider,
  MenuItem,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { useAuth0 } from "@auth0/auth0-react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import "../components/Middle.css"
import { styled } from 'styled-components';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export const NAV_ITEMS = [
  {
    label: 'THE SHOP',
    children: [
      {
        label: 'FoodHub_Pantry',
        href: '#',
      },
      {
        label: 'Dansk',
        href: '#',
      },
      {
        label: 'New_Arrivals',
        href: '#',
      },
      {
        label: 'CookWare',
        href: '#',
      },

    ],
  },
  {
    label: 'RECIPES',
    children: [
      {
        label: 'Job Board',
        href: '#',
      },
      {
        label: 'FOOD',
        href: '#',
      },
    ],
  },
  {
    label: 'DINKS52',
    href: '#',
  },
  {
    label: 'HOME52',
    href: '#',
  },
  {
    label: 'COMMUNITY',
    href: '#',
  },
  {
    label: 'WATCH',
    href: '#',
  },

];


// onClick={() =>
//   logout({ logoutParams: { returnTo: window.location.origin } })
// }




export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const { user, isAuthenticated } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const navigate = useNavigate()



useEffect(()=> {
  
  if(isAuthenticated){
    localStorage.setItem("usermail", user.email)
  //  axios.post("http://localhost:4500/users", {...user}) 
  }
},[isAuthenticated])







  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
    


    return (
      <Stack direction={'row'} spacing={4} alignItems={"center"}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                className='underline'
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                    borderBottom: "2px solid gray",

                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>

              {navItem.children && (
                <PopoverContent
                  top={1.4}
                  width={"100%"}
                  left={-10}
                  boxShadow={'sm'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Grid templateColumns='repeat(5, 1fr)' gap={19} justifyContent={"space-between"}>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Grid>
                </PopoverContent>
              )}

            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };

  const DesktopSubNav = ({ label, href }) => {
    return (
      <Box>
        <Link
          //   border={"1px solid blue"}
          href={href}
          width={"50%"}
          role={'group'}
          display={'block'}
          rounded={'md'}
        >
          <Stack direction={'row'} align={'center'}>

            <Box>
              <Text
                transition={'all .3s ease'}
                fontWeight={500}>
                {label}
              </Text>
            </Box>

            <Flex
              transition={'all .3s ease'}
              transform={'translateX(-10px)'}
              opacity={0}
              _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
              justify={'flex-end'}
              align={'center'}
              flex={1}>
              {/* <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} /> */}
            </Flex>
          </Stack>
        </Link>

      </Box>
    );
  };

  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };

  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();


    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>

        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };

  return (
    <Box className='navBar' >
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Box className="wrapper">
            <Box className="container">
            <Text className='h1'
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            cursor={"pointer"}
onClick={()=> navigate("/")}
          >
           FOODHUB
          </Text>
            </Box>
          </Box>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
{/* *********************** */}
<Menu>
  <Flex alignItems={"center"} justifyContent={"center"} >
    <Text padding={0} m={0}>{isAuthenticated ? `${user.nickname}` : ""}</Text>
  </Flex>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={isAuthenticated ? `${user.picture}` :'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
               
              </Menu>

{/* *************************** */}
  
          {
           isAuthenticated ?  <Button
           as={'a'}
           display={{ base: 'none', md: 'inline-flex' }}
           fontSize={'sm'}
           fontWeight={500}
           color={'white'}
           bg={'#795744'}
           href={'#'}
           _hover={{
             bg: '#806657',
           }}
           onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
           >
           Logout
         </Button>: <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={500}
            color={'white'}
            bg={'#795744'}
            href={'#'}
            _hover={{
              bg: '#806657',
            }}
            onClick={()=> loginWithRedirect()}
            >
            Login
          </Button>
          }
         



          <i className="fa-solid fa-cart-shopping"
            style={{ marginTop: "12px", }}
            display={{ base: 'none', md: 'inline-flex' }}
           
          ></i>

        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}




