import React from 'react'
import { Stack, Box, Heading, Text, Button } from '@chakra-ui/react'
import { RiDeleteBin7Fill } from 'react-icons/ri'

const VideoCard = ({courseTitle, num, title, description, lectureId, courseId, deleteButtonHandler, addButtonHandler }) => {
  return (
    <Stack padding={['4', '8']} justifyContent={['flex-start', 'space-between']} direction={['column', 'row']} my='8' borderRadius={'lg'} boxShadow={'0 0 10px rgba(107,70,193,0.5)'}>
      <Box>
        <Heading size={'sm'} children={`#${num} ${title}`} />
        <Text>
          {description}
        </Text>
      </Box>

      <Button color='purple.600' onClick={() => deleteButtonHandler(courseId, lectureId)}>
        <RiDeleteBin7Fill />
      </Button>
    </Stack>
  )
}

export default VideoCard