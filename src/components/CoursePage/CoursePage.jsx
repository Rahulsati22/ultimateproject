import React, { useEffect, useState } from 'react'
import { Grid, Box, Heading, Text, VStack } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'
import Loader from '../Layout/Loader'
import { getCourseLectures } from '../../redux/Actions/course'
const CoursePage = ({ user }) => {
    const [lectureNumber, setLectureNumber] = useState(0);
    const { lectures  } = useSelector((state) => state.course);
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
       
        dispatch(getCourseLectures(params.id))
    }, [dispatch, params.id])


    if (user.role !== 'admin' && (user.subscription === undefined || user.subscription.status !== 'active')) {
        return <Navigate to={'/subscribe'} />
    }
    return (
        lectures ? (
            lectures && lectures.length > 0 ? (<Grid minH='90vh' templateColumns={['1fr', '3fr 1fr']}>


                <Box>
                    <video width={'100%'} src={lectures[lectureNumber].video.url} controls disablePictureInPicture disableRemotePlayback controlsList='nodownload nofullscreen noremoteplayback'></video>

                    <Heading m='4'>
                        {`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
                    </Heading>

                    <Heading m='4'>
                        Description
                    </Heading>

                    <Text m='4'>
                        {lectures[lectureNumber].description}
                    </Text>
                </Box>

                <VStack>
                    {
                        lectures.map((item, index) => {
                            return <button key={item._id} style={{
                                width: '100%',
                                padding: '1rem',
                                textAlign: 'center',
                                margin: '0',
                                borderBottom: '1px solid rgba(0,0,0,0.2)'
                            }
                            }
                                onClick={() => setLectureNumber(index)}>
                                <Text noOfLines={1}>
                                    #{index + 1} {item.title}
                                </Text>
                            </button>
                        })
                    }
                </VStack>
            </Grid>) : (<Heading w='100' h='100vh' display={'flex'} justifyContent={'center'} alignItems={'center'}>No Lectures</Heading>)
        ) : (<Loader />)
    )
}

export default CoursePage