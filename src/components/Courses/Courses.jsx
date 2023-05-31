import React, { useState } from 'react'
import { Container, Image, VStack, Stack, Input, Heading, HStack, Button, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Course = ({ views, title, imageSrc, id, addToPlayListHandler, creator, description, lecture }) => {
    return (
        <VStack className='course' alignItems={['center', 'flex-start']}>
            <Image src={imageSrc} boxSize={'60'} objectFit={'contain'} />
            <Heading size={'sm'} textAlign={['center', 'left']} maxW={'200px'} fontFamily={'sans-serif'} noOfLines={3} children={title} />
            <Text children={description} noOfLines={2} />

            <HStack>
                <Text fontWeight={'bold'} textTransform={'uppercase'} children={'Creator'} />
                <Text fontFamily={'body'} textTransform={'uppercase'} children={creator} />
            </HStack>

            <Heading textAlign={'center'} size={'xs'} children={`Lectures = ${lecture}`} textTransform={'uppercase'} />

            <Heading size={'xs'} children={`Views = ${views}`} textTransform={'uppercase'} />

            <Stack direction={['column', 'row']} alignItems={'center'} paddingY='8px'>
                <Link to={`/course/${id}`}>
                    <Button colorScheme='yellow'>
                        Watch Now
                    </Button>
                </Link>
                <Button variant={'ghost'} colorScheme='yellow' onClick={() => addToPlayListHandler(id)}>
                    Add To Playlist
                </Button>

            </Stack>
        </VStack>
    )
}

const Courses = () => {
    const [keyword, setKeyword] = useState("");
    const [category, setCategory] = useState("");
    const categories = [
        "Web development", "Artificial Intelligence", "Data Structure and Algorithm", "App Development", "Data Science",
        "Game Development"
    ]
    const addToPlayListHandler = () => { }
    return (
        <Container minH={'95vh'} maxWidth={'container.lg'} paddingY={'8'}>
            <Heading children='All Courses' margin={'8'} />
            <Input value={keyword} type={'text'} focusBorderColor='yellow.500' onChange={(e) => setKeyword(e.target.value)} placeholder='Search a Course...' />
            <HStack overflowX={'scroll'} paddingY={'8'}>
                {
                    categories.map((elem, i) => {
                        return <Button minW={'60'} key={i} onClick={() => setCategory(elem)}>
                            <Text children={elem} />
                        </Button>
                    })}

            </HStack>

            <Stack direction={['column', 'row']} flexWrap={'wrap'} justifyContent={['flex-start', 'space-evenly']} alignItems={['center', 'flex-start']}>
                <Course title='Sample' description={'Sample'} views={'124'}
                    imageSrc={'https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png'}
                    creator={'Sample boy'}
                    lectureCount={2}
                    addToPlayListHandler={addToPlayListHandler}
                />
            </Stack>
        </Container>
    )
}

export default Courses