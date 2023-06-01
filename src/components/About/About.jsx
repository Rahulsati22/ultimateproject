import React from 'react'
import { Container, Heading, HStack, Stack, Button, VStack, Avatar, Text, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { RiSecurePaymentFill } from 'react-icons/ri'
import  termsAndConditions  from '../TandC/TandC'





const Founder = () => {
    return (<Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
        <VStack>
            <Avatar src='https://igimages.gumlet.io/hindi/news/Hritik_roshan_1-0bc.jpg?w=376&dpr=2.6' boxSize={['40', '48']} />
            <Text children='Co-Founder' opacity={0.7} />
        </VStack>

        <VStack justifyContent='center' alignItems={['center', 'flex-start']}>
            <Heading children='Rahul Sati' size={['md', 'xl']} />
            <Text textAlign={['center', 'left']} children={'Hi, I am a full-stack developer. Our mission is to provide quality content at reasonable price'} />
        </VStack>
    </Stack>)
}

const VideoPlayer = () => {
    return (<Box width={'100%'}>
        <video width={'100%'} loop autoPlay muted src="introvideo" disableRemotePlayback disablePictureInPicture controls controlsList='nodownload nofullscreen noremoteplayback' />
    </Box>)
}

const TandC = ({ termsAndCondition }) => {
    return (<Box>
        <Heading my='4' textAlign={['center', 'left']} size='md'>Terms and Conditions</Heading>
        <Box overflowY={'scroll'} h='sm' p='4'>
            <Text textAlign={['center', 'left']} fontFamily={'heading'} letterSpacing={'widest'}>{termsAndCondition}</Text>
            <Heading my='4' children='Refund only available for cancellation within 7 days' textAlign={['center', 'left']} size='xs'>Terms and Conditions</Heading>
        </Box>
    </Box>)
}


const About = () => {
    return (
        <Container maxWidth={'container.lg'} padding={'16'} boxShadow={'lg'}>
            <Heading children='About Us' textAlign={['center', 'left']} />
            <Founder />

            <Stack m='8' direction={['column', 'row']} alignItems={'center'}>
                <Text fontFamily={'cursive'} m='8' textAlign={['center', 'left']}>
                    We are a video streaming platform with some premium courses available only for premium users.
                </Text>

                <Link to='/subscribe'>
                    <Button variant='ghost' color='yellow'>
                        Checkout Our Plan
                    </Button>
                </Link>
            </Stack>

            <VideoPlayer />

            <TandC termsAndCondition={termsAndConditions} />

            <HStack my={'4'}>
                <RiSecurePaymentFill />
                <Heading size={'xs'} fontFamily={'sans-serif'} textTransform={'uppercase'} children='Payment is secured by RazorPay' />
            </HStack>
        </Container>
    )
}

export default About