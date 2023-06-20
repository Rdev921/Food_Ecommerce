import React from 'react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Button
  } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'




const Thankyou = () => {
    const navigate = useNavigate()

  return (
  <Alert
  status='success'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='200px'
>
  <AlertIcon boxSize='40px' mr={0} />
  <AlertTitle mt={4} mb={1} fontSize='lg'>
   Order Placed Successfully!!!
  </AlertTitle>
  <AlertDescription maxWidth='sm'>
  Thank You !!
  </AlertDescription>

<Button color={"success"} onClick={()=> navigate("/")}>Continue Shopping</Button>
</Alert>
  )
}

export default Thankyou
