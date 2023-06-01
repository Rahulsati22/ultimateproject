import { Container, Heading, VStack, Button, Box, Text } from '@chakra-ui/react'
import React from 'react'
import { RiCheckboxCircleFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
const PaymentSuccess = () => {
    return (
        <Container h='90vh' padding={'16'}>
            <Heading my='8' textAlign={'center'}>
                You have Pro Pack
            </Heading>

            <VStack boxShadow={'lg'} alignItems={'center'} borderRadius={'lg'}>
                <Box w='full' bg='yellow.400' p='4' css={{ borderRadius: '8px 8px 0 0' }}>
                    <Text textTransform={'uppercase'} color='black'>
                        Payment Success
                    </Text>
                </Box>

                <Box p='4'>
                    <VStack textAlign={'center'}>
                        <Text>
                            Congratulations you are a pro member. You have access to premium content.
                        </Text>

                        <Heading size={'4xl'}>
                            <RiCheckboxCircleFill />
                        </Heading>
                    </VStack>
                </Box>

                <Link to='/subscribe'>
                    <Button variant='ghost'>
                        Try Again
                    </Button>
                </Link>

                <Heading size={'xs'} paddingBottom='10px'>
                    Reference : ajsakslakslasklakslaskl
                </Heading>
            </VStack>
        </Container>
    )
}

export default PaymentSuccess