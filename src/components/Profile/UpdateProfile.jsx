import React, { useEffect, useState } from 'react'
import { Container, Heading, Button, VStack, Input } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfile } from '../../redux/Actions/profile';
import toast from 'react-hot-toast'
import { getMyProfile } from '../../redux/Actions/user';
import { useNavigate } from 'react-router-dom';
const UpdateProfile = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const dispatch = useDispatch();
  const { message, error, loading } = useSelector((state) => state.profile);
  useEffect(() => {
    if (message) {
      toast.success(message)
      dispatch({
        type: "clearMessage"
      })
    }
    if (error) {
      toast.error(error)
      dispatch({
        type: "clearError"
      })
    }
  }, [message, error, dispatch])
  const submitHandler = async (e) => {
    e.preventDefault()
    dispatch(updateProfile(name, email)).then(() => {
      dispatch(getMyProfile());
    })
    navigate('/profile')
  }
  return (
    <Container py='16' minH={'90vh'}>
      <form action="" onSubmit={submitHandler}>
        <Heading textTransform={'uppercase'} my='16' textAlign={['center', 'left']}>
          Update Profile
        </Heading>
        <VStack spacing={'8'}>
          <Input focusBorderColor='yellow.500' type='text' placeholder='Name' required onChange={(e) => setName(e.target.value)} id='name' value={name} />


          <Input focusBorderColor='yellow.500' type='email' placeholder='Email' required onChange={(e) => setEmail(e.target.value)} id='email' value={email} />

          <Button isLoading={loading} type='submit' w='full' colorScheme='yellow'>
            Update
          </Button>
        </VStack>


      </form>
    </Container>
  )
}

export default UpdateProfile