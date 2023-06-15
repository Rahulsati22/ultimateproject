import { Container, VStack, FormLabel, Input, Button, Box, Heading, Textarea } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { contactUs } from '../../redux/Actions/other';
import toast from 'react-hot-toast'
import {useDispatch, useSelector} from 'react-redux'
const Contact = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const {loading, message:otherMessage, error} = useSelector((state)=>state.other);
  const submitHandler = (e)=>{
    e.preventDefault();
    dispatch(contactUs(name, email, message))
  }
  useEffect(()=>{
    if (error){
      toast.error(error);
      dispatch({
        type : "clearError"
      })
    }
    if (otherMessage){
      toast.success(otherMessage);
      dispatch({
        type : 'clearMessage'
      })
    }
  },[error, otherMessage, dispatch])
  return (
    <Container h='92vh' mt='16'>
      <VStack h='full' justifyContent={'center'} spacing={'16'}>
        <Heading children='Contact Us'></Heading>
        <form onSubmit={submitHandler} style={{ width: "100%" }}>
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
          <Button isLoading={loading} my='4' colorScheme='yellow' type='submit'>
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