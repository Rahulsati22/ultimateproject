import React, { useEffect, useState } from 'react'
import { Container, Heading, Input, VStack, Button } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { forgetPassword } from '../../redux/Actions/profile';
import toast from 'react-hot-toast'
const ForgetPassword = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const { loading, message, error } = useSelector((state) => state.profile);
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
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(forgetPassword(email));
    }
    return (
        <Container py='16' height={'90vh'}>
            <form onSubmit={submitHandler}>
                <Heading children="Forget Password" textTransform={'uppercase'} my='16' textAlign={['center', 'left']} />
                <VStack spacing='8'>
                    <Input required id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='abc@gmail.com' type={'email'} focusBorderColor='yellow.500' />
                </VStack>

                <Button isLoading={loading} type='submit' width='full' colorScheme='yellow' marginTop='5'>Send Reset Link</Button>
            </form>
        </Container>
    )
}
export default ForgetPassword