import React, { useState } from 'react'

import {
  Image,
  Flex,
  Text,
  Box,
  SimpleGrid,
  HStack,
  Center,
  Menu,
  MenuButton,
  MenuList, MenuItem, Heading, Wrap, WrapItem, Square, Stack,
} from '@chakra-ui/react'
import './Middle.css'
const Middle = () => {
  const [text, setText] = useState(true)

 


  return (
    <>
      
        <HStack gap='5' fontSize={"15px"}   p={"10px 15px"} background={"#57696d"} justifyContent={"center"}>
          <Menu >
            <MenuButton className='dorp' >
             New Arrivals
            </MenuButton>
          </Menu>

          
            {/* ****************************************222222222222222222************************************************************ */}
          <Menu>
            <MenuButton className='dorp' >
             Cookware
            </MenuButton>

            <MenuList border='none' marginTop='20px' marginLeft='-100px'  >
              <Flex gap={5}>
                <SimpleGrid columns={1} spacing={1}>
                  <Text as='b' color={"#a18f7a"}>SHOP COOKWARE</Text>
                  <hr />
                  <MenuItem fontSize='sm' className='item' bg='none'>All Cookware</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Baking & Roasting Pans</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Cookware sets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Dutch Ovens & Stock Pots</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Frying Pans & Skillets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Griddles & Grill Pans</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Sauce & Saute Pans</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Speciality Cookware</MenuItem>
                </SimpleGrid>

                <SimpleGrid columns={1} ml={3}>
                  <Text as='b' color={"#a18f7a"}> SHOP BY BRAND</Text>
                  <hr />
                 <MenuItem fontSize='sm' fontStyle={"italic"} className='item' bg='none'>Hestan</MenuItem>
                  <MenuItem fontSize='sm' fontStyle={"italic"} className='item' bg='none'>Staub</MenuItem>
                  <MenuItem fontSize='sm' fontStyle={"italic"} className='item' bg='none'>Le Creuset</MenuItem>
                  <MenuItem fontSize='sm' fontStyle={"italic"} className='item' bg='none'>de Buyer</MenuItem>
                  <MenuItem fontSize='sm' fontStyle={"italic"}  className='item' bg='none'>ZWILLING J.A. Henckels</MenuItem>
                  <MenuItem fontSize='sm' fontStyle={"italic"} className='item' bg='none'>Smithey Tronware Co.</MenuItem>
                  <MenuItem fontSize='sm' fontStyle={"italic"} className='item' bg='none'>Dansk</MenuItem>
                  <MenuItem fontSize='sm' fontStyle={"italic"} className='item' bg='none'>GreenPan</MenuItem>
                </SimpleGrid>
               
                <SimpleGrid columns={1} color={"#a18f7a"}>
                  {/* <Text as='b' mb={3}>Shop by Gourment Food& Treats</Text>
                  <hr /> */}
                  <Box boxSize='sm' >
                    <Image mt={3} ml={5} width={"300px"} src='https://images.food52.com/twe5v1mP4_Jtzrc2ZTVTqDk2aXI=/2000x2000/a6c85a73-3445-464a-bf2d-4841a8a6d0f4--2022-1010_staub_deep-dutch-oven_sesame_silo_mj-kroeger.jpg' alt='Dan Abramov' />
                  <Text mt={2}  color={"gray"} fontWeight={700}>Staub Cast Iron Tall Cocotte, 5QT</Text>
                  </Box>
                </SimpleGrid>
              </Flex>
            </MenuList>
            {/* ******************************************3333333333333333333333333333333333333************************************ */}
          </Menu>
          <Menu>
            <MenuButton className='dorp' >
             Appliances
            </MenuButton>
            <MenuList border='none' marginTop='20px' marginLeft='-100px'  >
            <Flex gap={5}>
               

                <SimpleGrid columns={1} border={"1px solid red"} padding={6}>
                  <Text as='b' ml={5}  color={"#a18f7a"}> SHOP BY BRAND</Text>
                  <hr />
                 <MenuItem fontSize='sm' className='item' bg='none'>All Appliances</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>BLenders & Juicers</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Espresso Machines & Coffee Makers</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Food Processors</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Mixers and Attachments</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Speciality Appliances</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Tea Kettles</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Toasters & Toaster Ovens</MenuItem>
                </SimpleGrid>
               
                <SimpleGrid columns={1} border={"1px solid red"} ml={5} color={"#a18f7a"}>
                  <Box boxSize='sm' >
                    <Image mt={3} width={"300px"} src='https://images.food52.com/9rthx-xfYG9nbAt71A7vX4wrFmU=/2000x2000/7b47abed-d6c5-4cb7-8fe2-530be8a5d45b--2020-1005_raisenne_electric-dough-riser_silo_ty-mecham.jpg' alt='Dan Abramov' />
                  <Text mt={2} color={"gray"}  fontWeight={700}>Raisenne Dough Riser</Text>
                  </Box>
                </SimpleGrid>
              </Flex>
            </MenuList>

            {/* *******************************************4444444444444444444444444********************************** */}

          </Menu>
          <Menu>
            <MenuButton className='dorp'>
             Kitchen
            </MenuButton>
            <MenuList border='none' marginTop='20px' marginLeft='-300px'  >
            <Flex gap={5}>
                <SimpleGrid columns={1} spacing={1}>
                  <Text as='b' color={"#a18f7a"}>SHOP COOKWARE</Text>
                  <hr />
                  <MenuItem fontSize='sm' className='item' bg='none'>All Kitchen</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Bakeware</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Coffe & Tea Accessories</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Cookbooks</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Countertop Organization</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Cutting Boards</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Food Storage</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Grill Tools & Accessories</MenuItem>
                </SimpleGrid>

                <SimpleGrid columns={1} ml={3}>
                  <Text as='b' color={"#a18f7a"}> SHOP BY BRAND</Text>
                  <hr />
                 <MenuItem fontSize='sm' fontStyle={"italic"} className='item' bg='none'>Brabantia</MenuItem>
                  <MenuItem fontSize='sm' fontStyle={"italic"} className='item' bg='none'>Hasegawa Ladders</MenuItem>
                  <MenuItem fontSize='sm' fontStyle={"italic"} className='item' bg='none'>Mepal</MenuItem>
                  <MenuItem fontSize='sm' fontStyle={"italic"} className='item' bg='none'>OXO</MenuItem>
                  <MenuItem fontSize='sm' fontStyle={"italic"}  className='item' bg='none'>Emile Henry</MenuItem>
                  <MenuItem fontSize='sm' fontStyle={"italic"} className='item' bg='none'>KitchenAid</MenuItem>
                  <MenuItem fontSize='sm' fontStyle={"italic"} className='item' bg='none'>ZWILLING J.A. Henckels</MenuItem>
                  <MenuItem fontSize='sm' fontStyle={"italic"} className='item' bg='none'>Miyabi</MenuItem>
                </SimpleGrid>
               
                <SimpleGrid columns={1} color={"#a18f7a"}>
                  {/* <Text as='b' mb={3}>Shop by Gourment Food& Treats</Text>
                  <hr /> */}
                  <Box boxSize='sm' >
                    <Image mt={3} ml={5} width={"300px"} src='https://images.food52.com/q8KwAf__si74VWuw3je_dCc2GEM=/2000x2000/a92fabf4-9836-4540-abc8-bb49470852a2--2022-0706_holiday-press-preview_frieling_double-walled-french-press_silo_mj-kroeger_copy_2-.jpg' />
                  <Text mt={2}  color={"gray"} ml={4} fontWeight={700}>Frieling Double-Walled</Text>
                  <Text mt={2}  color={"gray"} ml={4} fontWeight={700}>French Press</Text>
                  </Box>
                </SimpleGrid>
              </Flex>
            </MenuList>

            {/* *****************************************5555555555555555555555555555555************************************ */}

          </Menu>
          <Menu>
          
              <MenuButton className='dorp' border='none'  >
               Table
              </MenuButton>
        


            {/* ****************************6666666666666666666666666666666666666666****************** */}

          </Menu>
          <Menu>
      

              <MenuButton className='dorp' >
             Home
              </MenuButton>
        


            {/* *********************************************777777777777777777777777777777777************************************ */}

          </Menu>
          <Menu>


              <MenuButton className='dorp'>
                Outdoor
              </MenuButton>
     

            {/* **********************************************8888888888888888888888888888********************************* */}

          </Menu>
          <Menu>
            <MenuButton className='dorp' >
              Pantry
            </MenuButton>

           

            {/* ***************************************99999999999999999999999999999999999999******************************** */}

          </Menu>
          <Menu>
            <MenuButton className='dorp'>
              Gifts
            </MenuButton>
          </Menu>

            {/* *****************************************10101010101010101010101010101*************************************** */}

          <Menu>
            <MenuButton className='dorp' borderRight={"1px solid #c3c7c1"} padding={"0px 20px"}>
              Sale
            </MenuButton>

          </Menu>

            {/* *************************************11111111111111111111111111111111********************************************* */}

          <Menu>
            
            <MenuButton className='dorp' fontFamily={"mono"} fontSize={"18px"}>
              DANSK
            </MenuButton>
          </Menu>
          <Menu>

            <MenuButton className='dorp'  fontWeight={600} color={"#fcfcfc"} fontFamily={"monospace"}>
              FIVE.TWO
            </MenuButton>
          </Menu>


          <Menu>

            <MenuButton className='dorp' letterSpacing={"2px"} fontWeight={400}>
              SCHOOLHOUSE
            </MenuButton>
          </Menu>

        </HStack>
        <Center bg='#CBD5E0' padding={"7px 0px"} fontSize={"14px"} fontWeight={500} color={"RGBA(0, 0, 0, 0.48)"} gap={2}>
   Just dropped: 550+ New Arrivals 

   <Text fontWeight={700} fontSize={"14px"} color={"#444444"} as='u'>Shop Now | </Text>

 <Text fontSize={"14px"} as={"i"}> Free Standard Shipping on Order $99+ </Text>

   

   <Text as='i' fontSize={"14px"} textDecoration={"underline"} >View Detials</Text>

</Center>
        <br />

      </>
  
    

  )
}

export default Middle
