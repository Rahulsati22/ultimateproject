import React from 'react'
import { ColorModeSwitcher } from '../../ColorModeSwitcher'
import { RiDashboardFill, RiLogoutBoxRLine, RiMenu5Fill } from 'react-icons/ri'
import { Button, Drawer, HStack, VStack, DrawerOverlay, DrawerBody, DrawerContent, DrawerHeader, DrawerFooter, useDisclosure } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getMyProfile, logoutUser } from '../../redux/Actions/user'

const Header = ({ isAuthenticated, user }) => {
    const { onOpen, onClose, isOpen } = useDisclosure();
    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(logoutUser());
        onClose();
    }

    return (
        <>
            <ColorModeSwitcher />
            <Button onClick={onOpen} zIndex={'overlay'} colorScheme='yellow' width={'12'} height={'12'} rounded={'full'} position={'fixed'} top='6' left='6'>
                <RiMenu5Fill />
            </Button>

            <Drawer placement='left' isOpen={isOpen} onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth={'1px'}>
                        COURSE BUNDLER
                    </DrawerHeader>

                    <DrawerBody>
                        <VStack spacing={'4'} alignItems={'flex-start'}>
                            <Link onClick={onClose} to='/'>
                                <Button variant={'ghost'}>
                                    Home
                                </Button>
                            </Link>

                            <Link onClick={onClose} to='/courses'>
                                <Button variant={'ghost'}>
                                    Browse All Courses
                                </Button>
                            </Link>

                            <Link onClick={onClose} to='/request'>
                                <Button variant={'ghost'}>
                                    Request a Course
                                </Button>
                            </Link>

                            <Link onClick={onClose} to='/contact'>
                                <Button variant={'ghost'}>
                                    Contact Us
                                </Button>
                            </Link>


                            <Link onClick={onClose} to='/about'>
                                <Button variant={'ghost'}>
                                    About
                                </Button>
                            </Link>
                        </VStack>


                        <HStack justifyContent={'space-evenly'} position='absolute' bottom={'2rem'} width='80%'>
                            {isAuthenticated ? (<>
                                <HStack>
                                    <Link onClick={onClose} to='/profile'>
                                        <Button variant={'ghost'} colorScheme='yellow'>
                                            Profile
                                        </Button>
                                    </Link>

                                    <Button variant={'ghost'} onClick={logoutHandler}>
                                        <RiLogoutBoxRLine />
                                        Logout
                                    </Button>
                                </HStack>

                                {
                                    user && user.role === 'admin' && <Link to='/admin/dashboard'>
                                        <Button variant={'ghost'} colorScheme='purple'>
                                            <RiDashboardFill style={{ margin: '4px' }} />
                                            Dashboard
                                        </Button>
                                    </Link>
                                }
                            </>) : (<>
                                <Link onClick={onClose} to='/login'>
                                    <Button colorScheme='yellow'>Login</Button>
                                </Link>
                                <p>OR</p>
                                <Link onClick={onClose} to='/register'>
                                    <Button colorScheme='yellow'>Sign Up</Button>
                                </Link>
                            </>)}
                        </HStack>
                    </DrawerBody>


                    <DrawerFooter>

                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Header