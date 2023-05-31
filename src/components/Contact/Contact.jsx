import { Container, VStack, FormLabel, Input, Button, Box, Heading, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Container h='92vh' mt='16'>
      <VStack h='full' justifyContent={'center'} spacing={'16'}>
        <Heading children='Contact Us'></Heading>
        <form action="" style={{ width: "100%" }}>
          <Box my='4'>
            <FormLabel htmlFor='name' children='Your Name' />
            <Input placeholder='abc' id='name' value={name} required type='text' onChange={(e) => setName(e.target.value)} focusBorderColor='yellow.500' />
          </Box>


          <Box my='4'>
            <FormLabel htmlFor='email' children='Your Email' />
            <Input id='email' value={email} required type='email' onChange={(e) => setEmail(e.target.value)} placeholder='abc@gmail.com' focusBorderColor='yellow.500' />
          </Box>


          <Box my='4'>
            <FormLabel htmlFor='message' children='Message' />
            <Textarea focusBorderColor='yellow.500' required id='message' value={message} placeholder='Your Message....' onChange={(e) => setMessage(e.target.value)} />
          </Box>
          <Button my='4' colorScheme='yellow' type='submit'>
            Send Mail
          </Button>



          <Box my='4'>
            Request for a course?{' '}
            <Link to='/request'>
              <Button colorScheme='yellow' variant='link'>
                Click
              </Button>
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  )
}

export default Contact