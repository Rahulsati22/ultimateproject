import React from 'react'
import { Td, HStack, Button, Grid, Box, Th, Thead, Tr, Heading, TableContainer, TableCaption, Table, Tbody, useDisclosure } from '@chakra-ui/react'
import SideBar from './SideBar'
import Row from './Row'
import Row2 from './Row2'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import CourseModal from './CourseModal'
const AdminCourses = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const courses = [{
    _id: '1234',
    poster: {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTKvoHgV4BRCj-aCiRgropjRJqaof1EqMgbA'
    },
    title: "MERN Stack",
    category: "Web Development",
    views: '1000',
    numOfVideos: '100',
    createdBy: 'Rahul Sati'
  }]


  const deleteHandler = () => { console.log("I am delete handler") };
  const updateHandler = () => { console.log("I am update handler") };
  const deleteLectureButtonHandler = (courseId, lectureId) => {
    console.log("I am delete button handler", courseId, lectureId)
  }
  const addLectureButtonHandler = (e, courseId, title, description, video) => {
    e.preventDefault()
    console.log("I am add button handler", courseId)
  }
  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Box padding={['0', '16']} overflowX={'scroll'}>
        <Heading textTransform={'uppercase'} my='16' textAlign={['center', 'left']}>
          All Users
        </Heading>


        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size={'lg'}>
            <TableCaption>All available courses in the database</TableCaption>

            <Thead>
              <Tr>
                <Th>
                  Id
                </Th>
                <Th>
                  Poster
                </Th>
                <Th>
                  Title
                </Th>
                <Th>
                  Category
                </Th>
                <Th>
                  Creator
                </Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>

            <Tbody>

              {
                courses.map((item, indx) => {
                  return <Row2 onOpen={onOpen} item={item} key={indx} deleteHandler={deleteHandler} />
                })
              }

            </Tbody>
          </Table>
        </TableContainer>

        <CourseModal courseTitle={"React"} addButtonHandler={addLectureButtonHandler} deleteButtonHandler={deleteLectureButtonHandler} isOpen={isOpen} onClose={onClose} onOpen={onOpen} id={123} />

      </Box>

      <SideBar />

    </Grid>
  )
}


export default AdminCourses