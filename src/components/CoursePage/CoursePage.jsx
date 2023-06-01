import React, { useState } from 'react'
import { Grid, Box, Heading, Text, VStack } from '@chakra-ui/react'
const CoursePage = () => {
    const [lectureNumber, setLectureNumber] = useState(0);
    const lectures = [{
        _id: 'sabsbsbsb1',
        title: 'sample1',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi excepturi dolor nam unde doloribus! Ratione, debitis doloremque aspernatur suscipit consectetur consequatur commodi perferendis velit consequuntur odio illo iusto voluptatibus tenetur.',
        video: {
            url: '1234323'
        }
    },
    {
        _id: 'sabsbsbsb2',
        title: 'sample2',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi excepturi dolor nam unde doloribus! Ratione, debitis doloremque aspernatur suscipit consectetur consequatur commodi perferendis velit consequuntur odio illo iusto voluptatibus tenetur.',
        video: {
            url: '1234323'
        }
    },
    {
        _id: 'sabsbsbsb3',
        title: 'sample3',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi excepturi dolor nam unde doloribus! Ratione, debitis doloremque aspernatur suscipit consectetur consequatur commodi perferendis velit consequuntur odio illo iusto voluptatibus tenetur.',
        video: {
            url: '1234323'
        }
    },
    {
        _id: 'sabsbsbsb4',
        title: 'sample4',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi excepturi dolor nam unde doloribus! Ratione, debitis doloremque aspernatur suscipit consectetur consequatur commodi perferendis velit consequuntur odio illo iusto voluptatibus tenetur.',
        video: {
            url: '1234323'
        }
    },
    {
        _id: 'sabsbsbsb5',
        title: 'sample5',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi excepturi dolor nam unde doloribus! Ratione, debitis doloremque aspernatur suscipit consectetur consequatur commodi perferendis velit consequuntur odio illo iusto voluptatibus tenetur.',
        video: {
            url: '1234323'
        }
    },]

    return (
        <Grid minH='90vh' templateColumns={['1fr', '3fr 1fr']}>
            <Box>
                <video width={'100%'} src='https://youtu.be/nTKZ9WNZHoE' controls disablePictureInPicture disableRemotePlayback controlsList='nodownload nofullscreen noremoteplayback'></video>

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
        </Grid>
    )
}

export default CoursePage