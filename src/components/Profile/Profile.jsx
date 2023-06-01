import React from 'react'
import { Avatar, Container, Image, Heading, Stack, VStack, Button, Text, HStack, useDisclosure } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import ChangePhotoBox from './ChangePhotoBox'
const Profile = () => {
    const user = {
        name: "Rahul",
        email: 'rahulsati9969@gmail.com',
        poster: 'https://i.pinimg.com/564x/28/21/7a/28217ab678078c79606831ec10f2b456.jpg',
        createdAt: String(new Date().toISOString()),
        role: 'user',
        subscription: {
            status: 'active',
        },
        playlist: [{
            course: 'ansdkdknfkjsdks',
            poster: 'https://i.pinimg.com/564x/28/21/7a/28217ab678078c79606831ec10f2b456.jpg'
        }]
    }
    const { isOpen, onClose, onOpen } = useDisclosure();
    const removeFromPlaylistHandler = (id) => {

    }
    const changeSubmitHandler = (e, image) => {
        e.preventDefault();
        console.log('changed');
        console.log(image)
        onClose();
    }

    return (
        <Container minH='95vh' maxW='container.lg' py='8' >
            <Heading m='8' textTransform='uppercase'>
                Profile
            </Heading>
            <Stack
                justifyContent={'flex-start'}
                direction={['column', 'row']}
                alignItems={'center'}
                spacing={['8', '16']}
                padding={'8'}
            >
                <VStack>
                    <Avatar boxSize={'48'} />
                    <Button onClick={onOpen} colorScheme='yellow' variant={'ghost'}>
                        Change Photo
                    </Button>
                </VStack>

                <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
                    <HStack>
                        <Text fontWeight={'bold'}>Name</Text>
                        <Text>{user.name}</Text>
                    </HStack>

                    <HStack>
                        <Text fontWeight={'bold'}>Email</Text>
                        <Text>{user.email}</Text>
                    </HStack>

                    <HStack>
                        <Text fontWeight={'bold'}>CreatedAt</Text>
                        <Text>{user.createdAt.split('T')[0]}</Text>
                    </HStack>

                    <HStack>
                        {
                            user.role !== 'admin' && (<HStack>
                                <Text fontWeight={'bold'}>
                                    Subscription
                                </Text>
                                {user.subscription.status === 'active' ?
                                    (
                                        <Button variant={'unstyled'} color={'yellow.500'}>Cancel Subscription</Button>
                                    ) : (
                                        <Link to='/subscribe'>
                                            <Button colorScheme='yellow'>Subscribe</Button>
                                        </Link>

                                    )}
                            </HStack>)
                        }
                    </HStack>

                    <Stack
                        direction={['column', 'row']} alignItems={'center'}>
                        <Link to='/updateprofile'>
                            <Button>Update Profile</Button>
                        </Link>

                        <Link to='/changepassword'>
                            <Button>Change Password</Button>
                        </Link>

                    </Stack>
                </VStack>
            </Stack>

            <Heading>
                Playlist
            </Heading>
            {
                user && user.playlist && user.playlist.length && <Stack alignItems={'center'} p='4' flexWrap={'wrap'} direction={['column', 'row']}>
                    {user.playlist.map((element, index) => {
                        return <VStack key={element._id} m='2' w='48'>
                            <Image src={element.poster} objectFit={'contain'} boxSize={'full'} />
                            <HStack>
                                <Link to={`/course/${element.course}`}>
                                    <Button colorScheme='yellow' variant={'ghost'}>
                                        Watch Now
                                    </Button>
                                </Link>

                                <Button onClick={() => removeFromPlaylistHandler(element.course)}>
                                    <RiDeleteBin7Fill />
                                </Button>
                            </HStack>
                        </VStack>
                    })}
                </Stack>
            }
            <ChangePhotoBox changeSubmitHandler={changeSubmitHandler} isOpen={isOpen} onClose={onClose} onOpen={onOpen} />

        </Container>
    )
}

export default Profile