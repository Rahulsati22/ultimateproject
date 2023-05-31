import React, { useState } from 'react'
import { Container, VStack, Heading, FormLabel, Input, Box, Button, Avatar } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

export const fileUploadCss = {
    cursor: "pointer",
    // padding : '0',
    marginLeft: '-5%',
    width: '110%',
    border: 'none',
    height: '100%',
    color: "#ECC94B",
    backgroundColor: 'white'
}
const fileUploadStyle = {
    '&&::file-selector-button': fileUploadCss
}
const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imagePrev, setImagePrev] = useState('');
    const [image, setImage] = useState('');
    const changeImageHandler = (e) => {
        const files = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(files);
        reader.onloadend = () => {
            setImagePrev(reader.result)
            setImage(files)
        }
    }
    return (
        <Container minh={'100vh'}>
            <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
                <Heading mt='20' children='Registration' textTransform={'uppercase'} />

                <form action="" style={{ 'width': "100%" }}>
                    <Box mb='4' display={'flex'} justifyContent={'center'}>
                        <Avatar size='2xl' src={imagePrev} />
                    </Box>
                    <Box my={'3'}>
                        <FormLabel htmlFor='name' children='Your Name' />
                        <Input id='name' value={name} required type='text' onChange={(e) => setName(e.target.value)} placeholder='abc xyz'
                            focusBorderColor='yellow.500'
                        />
                    </Box>
                    <Box my={'3'}>
                        <FormLabel htmlFor='email' children='Email Address' />
                        <Input id='email' value={email} required type='email' onChange={(e) => setEmail(e.target.value)} placeholder='abc@gmail.com'
                            focusBorderColor='yellow.500'
                        />
                    </Box>
                    <Box my={'3'}>
                        <FormLabel htmlFor='password' children='Enter Your Password' />
                        <Input id='password' value={password} required type='password' onChange={(e) => setPassword(e.target.value)} placeholder='abc123'
                            focusBorderColor='yellow.500'
                        />
                    </Box>

                    <Box my={'3'}>
                        <FormLabel htmlFor='chooseAvatar' children='Choose Avatar' />
                        <Input onChange={changeImageHandler} focusBorderColor='yellow.500' id='chooseAvatar' accept='image/*' required type='file' placeholder='abc123' css={fileUploadStyle} />
                    </Box>

                    <Box>
                        <Link to='/forgetpassword'>
                            <Button fontSize='sm' variant='ghost'>
                                Forget Password?
                            </Button>
                        </Link>
                    </Box>


                    <Button my='3' colorScheme='yellow' type='submit'>
                        Register
                    </Button>

                    <Box my='3'>
                        Already Have an Account? <Link to='/login' ><Button color={'yellow'} variant={'link'}>
                            Login
                        </Button> here</Link>
                    </Box>

                </form>
            </VStack>
        </Container>
    )
}

export default Register