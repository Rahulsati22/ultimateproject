import React, { useEffect } from 'react'
import { Grid, Box, Th, Thead, Tr, Heading, TableContainer, TableCaption, Table, Tbody } from '@chakra-ui/react'
import SideBar from './SideBar'
import Row from './Row'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getAllUsers, updateUser } from '../../redux/Actions/admin'
import toast from 'react-hot-toast'
const Users = () => {
  const dispatch = useDispatch();
  const { users, loading, error, message } = useSelector((state) => state.admin)

  useEffect(() => {
    if (message) {
      toast.success(message)
      dispatch({
        type: "clearMessage"
      })
    }
    if (error) {
      toast.error(error);
      dispatch({
        type: "clearError"
      })
    }
    dispatch(getAllUsers());
  }, [dispatch, message, error])

  const deleteHandler = (id) => {
    dispatch(deleteUser(id)).then(() => {
      dispatch(getAllUsers())
    })
  };
  const updateHandler = (id) => {
    dispatch(updateUser(id)).then(() => {
      dispatch(getAllUsers());
    })
  };
  return (
    <>
      
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
                    users && users.map((item, indx) => {
                      return <Row loading={loading} item={item} key={indx} updateHandler={updateHandler} deleteHandler={deleteHandler} />
                    })
                  }

                </Tbody>
              </Table>
            </TableContainer>
          </Box>

          <SideBar />

        </Grid>
      
    </>
  )
}


export default Users