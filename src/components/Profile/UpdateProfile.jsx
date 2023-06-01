import React, { useState } from 'react'
import { Container, Heading, Button, VStack, Input } from '@chakra-ui/react'
const UpdateProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <Container py='16' minH={'90vh'}>
      <form action="">
        <Heading textTransform={'uppercase'} my='16' textAlign={['center', 'left']}>
          Update Profile
        </Heading>
        <VStack spacing={'8'}>
          <Input focusBorderColor='yellow.500' type='text' placeholder='Name' required onChange={(e) => setName(e.target.value)} id='name' value={name} />


          <Input focusBorderColor='yellow.500' type='email' placeholder='Email' required onChange={(e) => setEmail(e.target.value)} id='email' value={email} />

          <Button type='submit' w='full' colorScheme='yellow'>
            Update
          </Button>
        </VStack>


      </form>
    </Container>
  )
}

export default UpdateProfile