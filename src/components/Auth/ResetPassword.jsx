import React, { useState } from 'react'
import { Container, Heading, Input, VStack, Button } from '@chakra-ui/react'
import { useParams } from 'react-router-dom';
const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const params=useParams();
    console.log(params.token)
    return (
        <Container py='16' height={'90vh'}>
            <form action="">
                <Heading children="Reset Password" textTransform={'uppercase'} my='16' textAlign={['center', 'left']} />
                <VStack spacing='8'>
                    <Input required id='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='New Password' type={'password'} focusBorderColor='yellow.500' />
                </VStack>
                <Button type='submit' width='full' colorScheme='yellow' marginTop='5'>Reset Password</Button>
            </form>
        </Container>
    )
}

export default ResetPassword