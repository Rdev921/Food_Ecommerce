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
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
 

  export  const NAV_ITEMS = [
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

  
  export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
    
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
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                    borderBottom:"2px solid gray",
                 
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                top={1.4}
             width={"100%"}
                  border={"1px solid red"}
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
  
  const DesktopSubNav = ({ label, href}) => {
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
        <Stack  direction={'row'}  align={'center'}>  
      
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
      <Box>
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
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              fontWeight={500}
              fontSize={"30px"}
              pl={5}
              color={useColorModeValue('blue', 'white')}>
              FOODHUB
            </Text>
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Button
              as={'a'}
              fontSize={'lg'}
              fontWeight={400}
              variant={'link'}
              href={'#'}>
              Sign In
            </Button>
            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={500}
              color={'white'}
              bg={'blue.400'}
              href={'#'}
              _hover={{
                bg: 'blue.300',
              }}>
              Sign Up
            </Button>
            <i className="fa-solid fa-cart-shopping" 
            style={{marginTop:"12px",}}
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
  
  
 
  
 