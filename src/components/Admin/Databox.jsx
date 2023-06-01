import React from 'react'
import { Box, Text, HStack } from '@chakra-ui/react'
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri'
const Databox = ({ title, qty, qtyPercentage, profit }) => {
    return (
        <Box w={['full', '20%']} boxShadow={'-2px 0 10px rgba(107, 70, 193, 0.5)'} p='8' borderRadius={'lg'}>

            <Text>
                {title}
            </Text>

            <HStack spacing={'6'}>
                <Text fontSize={'2xl'} fontWeight={'bold'}>
                    {qty}
                </Text>

                <HStack>
                    <Text>
                        {`${qtyPercentage}%`}
                    </Text>
                    {profit ? <RiArrowUpLine color='green' /> : <RiArrowDownLine color='red' />}
                </HStack>
            </HStack>
            <Text opacity={'0.6'}>
                Since Last Month
            </Text>
        </Box>
    )
}

export default Databox