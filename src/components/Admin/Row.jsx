import React from 'react'
import { Td, Tr, HStack, Button } from '@chakra-ui/react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
const Row = ({ item, updateHandler, deleteHandler }) => {
    return (
        <Tr>
            <Td>{item._id}</Td>
            <Td>{item.name}</Td>
            <Td>{item.email}</Td>
            <Td>{item.role}</Td>
            <Td>{item && item.subscription && item.subscription.status === 'active' ? 'Active' : 'Not Active'}</Td>
            <Td isNumeric>
                <HStack justifyContent='flex-end'>
                    <Button onClick={() => updateHandler(item._id)} variant='outline' color='purple.500'>Change Role</Button>
                    <Button color={'purple.600'} onClick={() => deleteHandler(item._id)}><RiDeleteBin7Fill /></Button>
                </HStack>
            </Td>
        </Tr>
    )
}

export default Row