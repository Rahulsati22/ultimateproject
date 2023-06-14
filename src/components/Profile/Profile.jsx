import React, { useEffect } from 'react'
import { Avatar, Container, Image, Heading, Stack, VStack, Button, Text, HStack, useDisclosure } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import ChangePhotoBox from './ChangePhotoBox'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPlayList, updateProfilePicture } from '../../redux/Actions/profile'
import { cancelSubscription, getMyProfile } from '../../redux/Actions/user'
import toast from 'react-hot-toast'
const Profile = () => {
    const { message, error, loading } = useSelector((state) => state.profile);
    const { isOpen, onClose, onOpen } = useDisclosure();
    const {loading:sloading, message:smessage, error:serror} = useSelector((state)=>state.subscription)
    const dispatch = useDispatch();
     const cancelSubs = ()=>{
        dispatch(cancelSubscription()).then(()=>{
            dispatch(getMyProfile());
        })
     }
    const removeFromPlaylistHandler = (id) => {
        dispatch(removeFromPlayList(id)).then(()=>{
            dispatch(getMyProfile())
        })
    }
    const {user} = useSelector((state)=>state.user);
    const changeSubmitHandler = async (e, image) => {
        e.preventDefault();
        console.log(image)
        const myForm = new FormData();
        myForm.append("file", image);
        dispatch(updateProfilePicture(myForm)).then(() => {
            dispatch(getMyProfile());
            onClose();
        })
    }

    useEffect(() => {
        if (message) {
            toast.success(message);
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
        if (smessage){
            toast.success(smessage);
            dispatch({
                type : "clearMessage"
            })
        }
        if (serror){
            toast.error(serror);
            dispatch({
                type : "clearError"
            })
        }
    },[dispatch, error, message, smessage, serror])

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
                    <Avatar src={user.avatar.url} boxSize={'48'} />
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
                                {user.subscription && user.subscription.status === 'active' ?
                                    (
                                        <Button isLoading={sloading} onClick={cancelSubs} variant={'unstyled'} color={'yellow.500'}>Cancel Subscription</Button>
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

                                <Button isLoading={loading} onClick={() => removeFromPlaylistHandler(element.course)}>
                                    <RiDeleteBin7Fill />
                                </Button>
                            </HStack>
                        </VStack>
                    })}
                </Stack>
            }
            <ChangePhotoBox loading={loading} changeSubmitHandler={changeSubmitHandler} isOpen={isOpen} onClose={onClose} onOpen={onOpen} />

        </Container>
    )
}

export default Profile