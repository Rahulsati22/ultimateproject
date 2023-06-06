import React from 'react'
import { Td, Tr, HStack, Button, Image } from '@chakra-ui/react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
const Row = ({ item, deleteHandler, onOpen }) => {
    return (
        <Tr>
            <Td>{item._id}</Td>
            <Td><Image width={'4rem'} src={item.poster.url} /></Td>
            <Td>{item.title}</Td>
            <Td textTransform={'uppercase'}>{item.category}</Td>
            <Td textTransform={'uppercase'}>{item.createdBy}</Td>
            <Td isNumeric>{item.views}</Td>
            <Td isNumeric>{item.numOfVideos}</Td>
            <Td isNumeric>
                <HStack justifyContent='flex-end'>
                    <Button onClick={onOpen} variant='outline' color='purple.500'>View Lectures</Button>
                    <Button color={'purple.600'} onClick={() => deleteHandler(item._id)}><RiDeleteBin7Fill /></Button>
                </HStack>
            </Td>
        </Tr>
    )
}

export default Row