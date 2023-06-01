import React from 'react'
import { Box, Heading, HStack, Progress, Text } from '@chakra-ui/react'
const Bar = ({ title, value, profit }) => {
    return (
        <>
            <Box py='4' px={['0', '20']}>
                <Heading size={'sm'} mb='2'>
                    {title}
                </Heading>
                <HStack width='full' alignItems='center'>
                    <Text>{profit ? "0%" : `-${value}%`}</Text>
                    <Progress borderRadius={'md'} w='full' value={profit ? value : 0} colorScheme='purple' />
                    <Text >{value > 100 ? value : 100}%</Text>
                </HStack>
            </Box>
        </>
    )
}

export default Bar