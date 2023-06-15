import { Container, VStack, FormLabel, Input, Button, Box, Heading, Textarea } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import { requestCourse } from '../../redux/Actions/other';
const Request = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [course, setCourse] = useState("");
    const dispatch = useDispatch();
    const { loading, error, message } = useSelector((state) => state.other);
    const submitHandler = (e)=>{
        e.preventDefault();
        dispatch(requestCourse(name, email, course));
    }
    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({
                type: 'clearError'
            })
        }
        if (message) {
            toast.success(message);
            dispatch({
                type: "clearMessage"
            })
        }

    }, [error, message, dispatch])
    return (
        <Container h='92vh' mt='16'>
            <VStack h='full' justifyContent={'center'} spacing={'16'}>
                <Heading children='Request New Course'></Heading>
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
                        <FormLabel htmlFor='course' children='Course' />
                        <Textarea focusBorderColor='yellow.500' required id='course' value={course} placeholder='Explain a course....' onChange={(e) => setCourse(e.target.value)} />
                    </Box>
                    <Button isLoading={loading} my='4' colorScheme='yellow' type='submit'>
                        Send Mail
                    </Button>



                    <Box my='4'>
                        See available Courses?{' '}
                        <Link to='/courses'>
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

export default Request