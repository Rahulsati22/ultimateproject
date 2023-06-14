import React, { useState } from 'react'
import { Container, VStack, Heading, FormLabel, Input, Box, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { login } from '../../redux/Actions/user';
import { useDispatch } from 'react-redux';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const submitHandler = (e)=>{
        e.preventDefault();
        console.log('hello')
        dispatch(login(email, password));
    }
    return (
        <Container height={'100vh'}>
            <VStack height={'full'} justifyContent={'center'} spacing={'16'}>
                <Heading children='Welcome to CourseBundler' />
                <form onSubmit={submitHandler} action="" style={{ 'width': "100%" }}>
                    <Box my={'4'}>
                        <FormLabel htmlFor='email' children='Email Address' />
                        <Input id='email' value={email} required type='email' onChange={(e) => setEmail(e.target.value)} placeholder='abc@gmail.com'
                            focusBorderColor='yellow.500'
                        />
                    </Box>
                    <Box my={'4'}>
                        <FormLabel htmlFor='password' children='Enter Your Password' />
                        <Input id='password' value={password} required type='password' onChange={(e) => setPassword(e.target.value)} placeholder='abc123'
                            focusBorderColor='yellow.500'
                        />
                    </Box>

                    <Box>
                        <Link to='/forgetpassword'>
                            <Button fontSize='sm' variant='ghost'>
                                Forget Password?
                            </Button>
                        </Link>
                    </Box>


                    <Button my='4' colorScheme='yellow' type='submit'>
                        Login
                    </Button>

                    <Box my='4'>
                        New User? <Link to='/register' ><Button color={'yellow'} variant={'link'}>
                            Sign Up
                        </Button> here</Link>
                    </Box>

                </form>
            </VStack>
        </Container>
    )
}

export default Login