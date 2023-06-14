import React, { useEffect, useState } from 'react'
import { Container, Heading, Input, VStack, Button } from '@chakra-ui/react'
import { useParams } from 'react-router-dom';
import { resetPassword } from '../../redux/Actions/profile';
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const params = useParams();
    const dispatch = useDispatch();
    console.log(params.token);
    const { message, error, loading } = useSelector((state) => state.profile);
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(resetPassword(params.token, password));
    }

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
        if (message) {
            toast.success(message);
        }
    }, [error, message, dispatch])
    return (
        <Container py='16' height={'90vh'}>
            <form onSubmit={submitHandler}>
                <Heading children="Reset Password" textTransform={'uppercase'} my='16' textAlign={['center', 'left']} />
                <VStack spacing='8'>
                    <Input required id='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='New Password' type={'password'} focusBorderColor='yellow.500' />
                </VStack>
                <Button isLoading={loading} type='submit' width='full' colorScheme='yellow' marginTop='5'>Reset Password</Button>
            </form>
        </Container>
    )
}

export default ResetPassword