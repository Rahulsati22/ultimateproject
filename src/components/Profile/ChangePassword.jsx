import React, { useState } from 'react'
import { Container, Heading, Button, VStack, Input } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { changePassword } from '../../redux/Actions/profile';
import { useEffect } from 'react';
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux';
const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(changePassword(oldPassword, newPassword))
    }
    const { message, error, loading } = useSelector((state) => state.profile);
    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({
                type: "clearError"
            })
        }
        if (message) {
            toast.success(message);
            dispatch({
                type: "clearMessage"
            })
        }
    }, [dispatch, error, message])
    return (
        <Container py='16' minH={'90vh'}>
            <form action="" onSubmit={submitHandler}>
                <Heading textTransform={'uppercase'} my='16' textAlign={['center', 'left']}>
                    Change Password
                </Heading>
                <VStack spacing={'8'}>
                    <Input focusBorderColor='yellow.500' type='password' placeholder='Enter your old password' required onChange={(e) => setOldPassword(e.target.value)} id='password' value={oldPassword} />


                    <Input focusBorderColor='yellow.500' type='password' placeholder='Enter your new password' required onChange={(e) => setNewPassword(e.target.value)} id='password' value={newPassword} />

                    <Button isLoading={loading} type='submit' w='full' colorScheme='yellow'>
                        Change
                    </Button>
                </VStack>


            </form>
        </Container>
    )
}

export default ChangePassword