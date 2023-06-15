import React, { useEffect, useState } from 'react'
import { Grid, Container,Button, Heading, VStack, Input, Select, Image } from '@chakra-ui/react'
import toast from 'react-hot-toast'
import SideBar from './SideBar'
import { useDispatch, useSelector } from 'react-redux'
import { addCourse } from '../../redux/Actions/admin'
import { getAllCourses } from '../../redux/Actions/course'
const CreateCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [imagePreview, setImagePreview] = useState('')
  const { message: adminMessage, error: adminError } = useSelector((state) => state.admin)
  const categories = [
    'Web Development',
    'Artificial Intelligence',
    'Data Structure and Algorithm',
    'App Development',
    'Data Science',
    'Game Development'
  ]
  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePreview(reader.result);
      setImage(file)
    }
  }
  const dispatch = useDispatch();
  useEffect(()=>{
    if (adminMessage) { toast.success(adminMessage); dispatch({ type: "clearMessage" }) }
    if (adminError) { toast.error(adminError); dispatch({ type: 'clearError' }) }
  })


  const submitHandler = (e)=>{
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("title", title);
    myForm.append("description", description);
    myForm.append("createdBy", createdBy);
    myForm.append("category", category);
    myForm.append("file", image);
    dispatch(addCourse(myForm)).then(()=>getAllCourses())
  }
  const fileUploadCss = {
    cursor: 'pointer',
    marginLeft: '-5%',
    width: '110%',
    border: 'none',
    height: '100%',
    color: 'purple',
    backgroundColor: 'white'
  }
  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Container py='16'>
        <form onSubmit={submitHandler}>
          <Heading textTransform='uppercase' my='16' textAlign={['center', 'left']}>
            Create Course
          </Heading>

          <VStack m='auto' spacing={'8'}>
            <Input value={title} onChange={e => setTitle(e.target.value)} placeholder='Title' type={'text'} focusBorderColor='purple.300' />

            <Input value={description} onChange={e => setDescription(e.target.value)} placeholder='Description' type={'text'} focusBorderColor='purple.300' />

            <Input value={createdBy} onChange={e => setCreatedBy(e.target.value)} placeholder='Creator Name' type={'text'} focusBorderColor='purple.300' />

            <Select focusBorderColor='purple.300' value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">Category</option>
              {categories.map((item, indx) => {
                return <option key={indx} value={item}>{item}</option>
              })}
            </Select>

            <Input accept='image/*' required id='chooseAvatar' type='file' focusBorderColor='puprle.300' onChange={changeImageHandler} css={{
              '&::file-selector-button': fileUploadCss
            }} />
            {imagePreview && <Image src={imagePreview} boxSize={'64'} objectFit={'contain'} />}

            <Button width='full'  colorScheme='purple' type='submit'>
              Create
            </Button>
          </VStack>
        </form>
      </Container>
      <SideBar />

    </Grid>
  )
}

export default CreateCourse