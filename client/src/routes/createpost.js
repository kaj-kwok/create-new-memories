import { useState } from 'react'
import { Box, TextInput, Group, Button, CSSObject } from '@mantine/core'
import { useForm } from '@mantine/form';
import Dropzone from '../Components/dropzone';
import { useSelector, useDispatch } from 'react-redux'
import { createNewPost } from '../actions/posts'

const useStyle: CSSObject = {
  border: '1px dashed white',
  height: '150px',
  display: 'flex',
  alignItems: 'center',
  padding: '0.5em',
  marginTop: "2em",
  marginBottom: "2em"
}

const CreatePost = () => {
  const [file, setFile] = useState('')
  const form = useForm({
    initialValues: {
      creator: '',
      title: '',
      description: '',
      tags: [],
      uploadedFile: ''
    }
  })
  const dispatch = useDispatch()

  const handleSubmitForm = (values) => {
    const post = { ...values, uploadedFile: file }
    dispatch(createNewPost(post))
  }

  const handleClearForm = () => {

  }

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit(handleSubmitForm)}>
        <TextInput
          required
          label="Creator"
          placeholder="Creator"
          {...form.getInputProps('creator')}
        />
        <TextInput
          required
          label="Title"
          placeholder="Title"
          {...form.getInputProps('title')}
        />
        <TextInput
          required
          label="Description"
          placeholder="Description"
          {...form.getInputProps('description')}
        />
        <TextInput
          required
          label="Tags"
          placeholder="Tags"
          {...form.getInputProps('tags')}
        />
        <Box sx={useStyle}>
          <Dropzone setFile={setFile} />
        </Box>
        <Group position="right" mt="md">
          <Button type="submit">Create Post</Button>
        </Group>
      </form>
    </Box>
  )
}

export default CreatePost;