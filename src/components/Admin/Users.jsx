import React from 'react'
import { Td, HStack, Button, Grid, Box, Th, Thead, Tr, Heading, TableContainer, TableCaption, Table, Tbody } from '@chakra-ui/react'
import SideBar from './SideBar'
import Row from './Row'
import { RiDeleteBin7Fill } from 'react-icons/ri'
const Users = () => {

  const users = [{
    _id: '1234455',
    name: "rahul sati",
    email: "rahulsati9969@gmail.com",
    role: "admin",
    subscription: {
      status: 'active'
    },

  }]

  const deleteHandler = ()=>{console.log("I am delete handler")};
  const updateHandler = ()=>{console.log("I am update handler")};
  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Box padding={['0', '16']} overflowX={'scroll'}>
        <Heading textTransform={'uppercase'} my='16' textAlign={['center', 'left']}>
          All Users
        </Heading>


        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size={'lg'}>
            <TableCaption>All available users in the database</TableCaption>

            <Thead>
              <Tr>
                <Th>
                  Id
                </Th>
                <Th>
                  Name
                </Th>
                <Th>
                  Email
                </Th>
                <Th>
                  Role
                </Th>
                <Th>
                  Subscription
                </Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>

            <Tbody>

              {
                users.map((item, indx) => {
                  return <Row item={item} key={indx} updateHandler={updateHandler} deleteHandler={deleteHandler} />
                })
              }

            </Tbody>
          </Table>
        </TableContainer>
      </Box>

      <SideBar />

    </Grid>
  )
}

 
export default Users