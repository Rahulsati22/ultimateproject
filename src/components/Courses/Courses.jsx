import React, { useEffect, useState } from 'react'
import { Container, Image, VStack, Stack, Input, Heading, HStack, Button, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCourses } from '../../redux/Actions/course'
import { addToPlayList } from '../../redux/Actions/profile'
import toast from 'react-hot-toast'
import { getMyProfile } from '../../redux/Actions/user'
const Course = ({ views, title, imageSrc, id, addToPlayListHandler, creator, description, lecture, loading }) => {
    return (
        <VStack className='course' alignItems={['center', 'flex-start']}>
            <Image src={imageSrc} boxSize={'60'} objectFit={'contain'} />
            <Heading size={'sm'} textAlign={['center', 'left']} maxW={'200px'} fontFamily={'sans-serif'} noOfLines={3} children={title} />
            <Text children={description} noOfLines={2} />

            <HStack>
                <Text fontWeight={'bold'} textTransform={'uppercase'} children={'Creator'} />
                <Text fontFamily={'body'} textTransform={'uppercase'} children={creator} />
            </HStack>

            <Heading textAlign={'center'} size={'xs'} children={`Lectures = ${lecture}`} textTransform={'uppercase'} />

            <Heading size={'xs'} children={`Views = ${views}`} textTransform={'uppercase'} />

            <Stack direction={['column', 'row']} alignItems={'center'} paddingY='8px'>
                <Link to={`/course/${id}`}>
                    <Button colorScheme='yellow'>
                        Watch Now
                    </Button>
                </Link>
                <Button isLoading={loading} variant={'ghost'} colorScheme='yellow' onClick={() => addToPlayListHandler(id)}>
                    Add To Playlist
                </Button>

            </Stack>
        </VStack>
    )
}

const Courses = () => {
    const dispatch = useDispatch();
    const [keyword, setKeyword] = useState("");
    const [category, setCategory] = useState("");
    const { loading, courses, error, message } = useSelector((state) => state.course)
    const categories = [
        "Web development", "Artificial Intelligence", "Data Structure and Algorithm", "App Development", "Data Science",
        "Game Development", "Android Development"
    ]
    useEffect(() => {
        if (message) { toast.success(message); dispatch({ type: "clearMessage" }) }
        if (error) { toast.error(error); dispatch({ type: "clearError" }) }
        
        dispatch(getAllCourses(category, keyword))
    }, [category, keyword, dispatch, error, message])
    const addToPlayListHandler = (courseId) => {
        console.log(courseId)
        dispatch(addToPlayList(courseId)).then(() => {
            dispatch(getMyProfile())
        })
    }
    return (
        <Container minH={'95vh'} maxWidth={'container.lg'} paddingY={'8'}>
            <Heading children='All Courses' margin={'8'} />
            <Input value={keyword} type={'text'} focusBorderColor='yellow.500' onChange={(e) => setKeyword(e.target.value)} placeholder='Search a Course...' />
            <HStack overflowX={'scroll'} paddingY={'8'}>
                {
                    categories.map((elem, i) => {
                        return <Button minW={'60'} key={i} onClick={() => setCategory(elem)}>
                            <Text children={elem} />
                        </Button>
                    })}

            </HStack>

            <Stack direction={['column', 'row']} flexWrap={'wrap'} justifyContent={['flex-start', 'space-evenly']} alignItems={['center', 'flex-start']}>
                {courses && courses.length > 0 ? (courses.map((elem) => {
                    return <Course
                        key={elem._id}
                        title={elem.title}
                        description={elem.description}
                        views={elem.views}
                        id={elem._id}
                        imageSrc={elem.poster.url}
                        creator={elem.createdBy}
                        lecture={elem.numOfVideos}
                        addToPlayListHandler={addToPlayListHandler}
                        loading={loading}
                    />
                })) : (<Heading opacity={0.5} mt='4'>Courses Not Found</Heading>)}
            </Stack>
        </Container>
    )
}

export default Courses