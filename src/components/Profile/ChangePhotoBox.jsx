import React, { useState } from 'react'
import { Modal, ModalOverlay, ModalHeader, ModalFooter, ModalContent, Input, Button, ModalCloseButton, ModalBody, Container, VStack, Avatar } from '@chakra-ui/react'
import { fileUploadCss } from '../Auth/Register'


const ChangePhotoBox = ({ isOpen, onClose, changeSubmitHandler }) => {

    const [image, setImage] = useState("");
    const [imagePreview, setImagePreview] = useState("");
    const handleChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImagePreview(reader.result)
            setImage(file)
        }
    }

    const clearChange = () => {
        setImagePreview('');
        setImage('');
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalHeader>Change Photo</ModalHeader>
            <ModalContent>
                <ModalCloseButton />
                <ModalBody>
                    <Container>
                        <form onSubmit={async (e) => {
                            await changeSubmitHandler(e, image);
                            clearChange();
                        }
                        }>
                            <VStack spacing={'8'}>
                                <Avatar boxSize={'48'} src={imagePreview} />
                                <Input onChange={handleChange} type={'file'} required css={{ "&::file-selector-button": fileUploadCss }} />
                                <Button type='submit' w='full' colorScheme='yellow'>Change</Button>
                            </VStack>
                        </form>
                    </Container>
                </ModalBody>
                <ModalFooter>
                    <Button mr='3' onClick={onClose}>
                        Cancel
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ChangePhotoBox