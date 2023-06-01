import React, { useState } from 'react'
import { Container, Heading, Button, VStack, Input } from '@chakra-ui/react'
const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    return (
        <Container py='16' minH={'90vh'}>
            <form action="">
                <Heading textTransform={'uppercase'} my='16' textAlign={['center', 'left']}>
                    Change Password
                </Heading>
                <VStack spacing={'8'}>
                    <Input focusBorderColor='yellow.500' type='password' placeholder='Enter your old password' required onChange={(e) => setOldPassword(e.target.value)} id='password' value={oldPassword} />


                    <Input focusBorderColor='yellow.500' type='password' placeholder='Enter your new password' required onChange={(e) => setNewPassword(e.target.value)} id='password' value={newPassword} />

                    <Button type='submit' w='full' colorScheme='yellow'>
                        Change
                    </Button>
                </VStack>


            </form>
        </Container>
    )
}

export default ChangePassword