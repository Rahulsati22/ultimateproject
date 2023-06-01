import React from 'react'
import { Heading, Container, VStack, Box, Text, Button } from '@chakra-ui/react'
const Subscribe = () => {
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

                    <Button my='8' w='full' colorScheme='yellow'>Buy Now</Button>
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