import React, { useEffect, useState } from 'react'
import {Grid, Box, Th, Thead, Tr, Heading, TableContainer, TableCaption, Table, Tbody, useDisclosure } from '@chakra-ui/react'
import SideBar from './SideBar'
import Row2 from './Row2'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import CourseModal from './CourseModal'
import { getAllCourses, getCourseLectures } from '../../redux/Actions/course'
import { addLectureToCourse, deleteCourse, deleteLectureFromCourse } from '../../redux/Actions/admin'
const AdminCourses = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { message, error, loading } = useSelector((state) => state.admin);
  const dispatch = useDispatch()
  const [courseId, setCourseId] = useState(0);
  useEffect(() => {
    dispatch(getAllCourses())
  }, [dispatch])
  const { courses, lectures } = useSelector(state => state.course)


  const deleteHandler = (courseId) => {
    console.log(courseId)
    dispatch(deleteCourse(courseId)).then(() => {
      dispatch(getAllCourses());
    })
  };


   


  const courseDetailsHandler = (courseId) => {
    dispatch(getCourseLectures(courseId))
    setCourseId(courseId)
    onOpen();
  }

  useEffect(() => {
    if (message) {
      toast.success(message)
      dispatch({
        type: "clearMessage"
      })
    }
    if (error) {
      toast.error(error)
      dispatch({
        type: "clearError"
      })
    }
  }, [dispatch, error, message])


  const deleteLectureButtonHandler = (courseId, lectureId) => {
    dispatch(deleteLectureFromCourse(courseId, lectureId)).then(() => {
      dispatch(getCourseLectures(courseId))
    })
  }


  const addLectureButtonHandler = (e, courseId, title, description, video) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("title", title);
    myForm.append("description", description);
    myForm.append("file", video);
    dispatch(addLectureToCourse(myForm, courseId)).then(() => dispatch(getCourseLectures(courseId)));
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
                  return <Row2 loading={loading} courseDetailsHandler={courseDetailsHandler} onOpen={onOpen} item={item} key={indx} deleteHandler={deleteHandler} />
                })
              }

            </Tbody>
          </Table>
        </TableContainer>

        <CourseModal loading={loading} lectures={lectures} courseTitle={"React"} addButtonHandler={addLectureButtonHandler} deleteButtonHandler={deleteLectureButtonHandler} isOpen={isOpen} onClose={onClose} onOpen={onOpen} id={courseId} />

      </Box>

      <SideBar />

    </Grid>
  )
}


export default AdminCourses