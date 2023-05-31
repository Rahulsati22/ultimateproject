import React from 'react'
import { Stack, VStack, Heading, Text, Button, Image, Box, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import './Home.css'
import { CgGoogle, CgYoutube } from 'react-icons/cg'
import { SiCoursera, SiUdemy } from 'react-icons/si'
import { DiAws } from 'react-icons/di'
const Home = () => {
    return (
        <section className='home'>
            <div className="container">
                <Stack direction={['column', 'row']} height={'100%'} justifyContent={['center', 'flex-end']} alignItems={'center'} spacing={['16', '56']}>
                    <VStack width={'full'} alignItems={['center', 'flex-end']} spacing={'6'}>
                        <Heading textAlign={['center', 'left']} children='LEARN FROM THE EXPERTS' size={'2xl'} />
                        <Text fontSize={'2xl'} fontFamily={'cursive'} textAlign={['center', 'left']} children='Find valuable content at reasonable prize' />
                        <Link to='/courses'>
                            <Button size={'lg'} colorScheme={'yellow'}>
                                Explore Now
                            </Button>
                        </Link>
                    </VStack>
                    <Image className='vector' boxSize={'md'} src='https://i.pinimg.com/736x/a5/05/a8/a505a8238d241ea60906a3723cd0444a.jpg' />
                </Stack>
            </div>


            <Box padding={'8'} bg={'blackAlpha.800'}>
                <Heading textAlign={'center'} fontFamily={'body'} color={'yellow.400'} children={'OUT BRANDS'} />
                <HStack className='brandsBanner' justifyContent={'space-evenly'} marginTop={'15px'}>
                    <CgGoogle />
                    <CgYoutube />
                    <SiCoursera />
                    <SiUdemy />
                    <DiAws />
                </HStack>
            </Box>

            <div className="container2">
                <video autoPlay controls controlsList='nodownload nofullscreen noremoteplayback'
                disablePictureInPicture disableRemotePlayback src='https://youtu.be/9JSYB59QmZw'>
                </video>
            </div>
        </section>
    )
}

export default Home