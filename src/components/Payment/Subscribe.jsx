import React, { useEffect, useState } from 'react'
import { Heading, Container, VStack, Box, Text, Button } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { buySubscription } from '../../redux/Actions/user';
import { server } from '../../redux/Store';
import toast from 'react-hot-toast'
import axios from 'axios';
const Subscribe = ({ user }) => {
    const { subscriptionId, loading, error } = useSelector((state) => state.subscription);
    const dispatch = useDispatch();
    const [key, setKey] = useState("");
    const subscriptionHandler = async () => {
        const { data } = await axios.get(`${server}/getrazorpaykey`, { withCredentials: true })
        setKey(data.key)
        dispatch(buySubscription())
    }
    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({
                type: "clearError"
            })
        }

        if (subscriptionId) {
            const openPopUp = () => {
                const options = {
                    key: key,
                    name: "Course Bundler",
                    description: "Get access to all premium content",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsyPiwCVZXMCXtXv-YlkqSb8A8iP77H_Eyaw&usqp=CAU",
                    subscription_id: subscriptionId,
                    callback_url: `${server}/paymentverification`,
                    prefill: {
                        name: user.name,
                        email: user.email,
                        contact: "",

                    },
                    notes: {
                        address: "Shivalik Nagar Haridwar"
                    },
                    theme: {
                        color: '#FFC800'
                    }
                }

                const razor = new window.Razorpay(options)
                razor.open()
            }
            openPopUp();
        }
    }, [dispatch, error, user.name, user.email, key, subscriptionId])
    return (
        <Container h='90vh' p='16'>
            <Heading children='Welcome' my='8' textAlign='center' />
            <VStack boxShadow={'lg'} alignItems={'stretch'} borderRadius={'lg'} spacing={'0'}>
                <Box bg='yellow.400' p={'4'} css={{
                    borderRadius: '8px 8px 0 0'
                }}>
                    <Text>
                        {`Pro Pack - ₹399.00`}
                    </Text>
                </Box>


                <Box p='4'>
                    <VStack textAlign={'center'} px='8' mt='4' spacing={'8'}>
                        <Text>{`Join Pro Pack and Get Access to all content.`}</Text>
                        <Heading size='md'>{`₹399 Only`}</Heading>
                    </VStack>

                    <Button isLoading={loading} onClick={subscriptionHandler} my='8' w='full' colorScheme='yellow'>Buy Now</Button>
                </Box>

                <Box bg={'blackAlpha.600'} p='4' css={{ borderRadius: '0 0 8px 8px' }}>
                    <Heading color={'white'} size={'sm'} textTransform={'uppercase'}>100% refund at cancellation</Heading>
                    <Text fontSize={'xs'} color={'white'}>*Terms and Conditions Apply</Text>
                </Box>
            </VStack>
        </Container>
    )
}

export default Subscribe