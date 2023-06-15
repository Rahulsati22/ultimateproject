import { ModalCloseButton, ModalOverlay, Modal, ModalContent, ModalHeader, ModalBody, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Grid, Box, Heading, VStack, Button, ModalFooter } from '@chakra-ui/react'
import VideoCard from './VideoCard'
const CourseModal = ({loading, lectures, courseTitle, isOpen, onClose, id, deleteButtonHandler, addButtonHandler }) => {
    // title, description, video
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [video, setVideo] = useState("");
    const [videoPreview, setVideoPreview] = useState("");
    const fileUploadCss = {
        color: 'purple',
        backgroundColor: 'white',
        width: '110%',
        cursor: 'pointer',
        height: '100%',
        marginLeft: '-5%',
        border: 'none'
    }
    const changeVideoHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            console.log(reader.result)
            setVideoPreview(reader.result);
            setVideo(file);
           
        }
    }
    const resetEverything = ()=>{
        setTitle("");
        setDescription("");
        setVideo("");
        setVideoPreview("");
        onClose();
    }
    return (
        <Modal scrollBehavior='outside' isOpen={isOpen} size='full' onClose={resetEverything}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    {courseTitle}
                </ModalHeader>
                <ModalCloseButton onClick={onClose}/>
                <ModalBody p='16'>
                    <Grid templateColumns={['1fr', '3fr 1fr']}>
                        <Box px={['0', '16']}>
                            <Box my='5'>
                                <Heading>
                                    Course Title
                                </Heading>
                                <Heading size='sm' opacity={0.4}>
                                    {`${id}`}
                                </Heading>
                            </Box>
                            <Heading size='lg'>
                                Lectures
                            </Heading>

                           { lectures.map((elem, indx)=>{
                                return <VideoCard id={elem._id} addButtonHandler={addButtonHandler} title={elem.title} description={elem.description} num={indx+1} lectureId={elem._id} courseId={id} deleteButtonHandler={deleteButtonHandler} />
                            })}
                            
                        </Box>

                        <Box>
                            <form onSubmit={(e) => addButtonHandler(e, id, title, description, video)}>
                                <VStack spacing='4'>
                                    <Heading size={'md'} textTransform={'uppercase'}>Add Lecture</Heading>
                                    <Input value={title} onChange={(e) => setTitle(e.target.value)} focusBorderColor='purple.300' placeholder='Title' />


                                    <Input value={description} onChange={(e) => setDescription(e.target.value)} focusBorderColor='purple.300' placeholder='Description' />


                                    <Input accept='video/mp4'
                                        required
                                        type='file'
                                        focusBorderColor='purple.300'
                                        css={{
                                            '&::file-selector-button': fileUploadCss
                                        }}
                                        onChange={changeVideoHandler}
                                    />

{
                                        videoPreview && (
                                            <video controlsList='nodownload' controls src={videoPreview} />
                                        )
                                    }

                                    <Button isLoading={loading} width='full' colorScheme='purple' type='submit'>
                                        Upload
                                    </Button>

                                    


                                </VStack>
                            </form>
                        </Box>
                    </Grid>
                </ModalBody>

                <ModalFooter>
                <Button onClick={onClose}>
                    Close
                </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default CourseModal