import React, { useState } from 'react'
import { Container, Heading, Input, VStack, Button } from '@chakra-ui/react'
const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    return (
        <Container py='16' height={'90vh'}>
            <form action="">
                <Heading children="Forget Password" textTransform={'uppercase'} my='16' textAlign={['center', 'left']} />
                <VStack spacing='8'>
                    <Input required id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='abc@gmail.com' type={'email'} focusBorderColor='yellow.500' />
                </VStack>

                <Button type='submit' width='full' colorScheme='yellow' marginTop='5'>Send Reset Link</Button>
            </form>
        </Container>
    )
}
export default ForgetPassword