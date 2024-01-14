import React from 'react'
import { CreateContainer, SubmitHeader } from '../Main.styled'
import SubmitForm from './SubmitForm'
function Submit() {
  return (
    <CreateContainer>
        <SubmitHeader>
            <div>Create a post</div>
        </SubmitHeader>
        <SubmitForm></SubmitForm>
    </CreateContainer>
  )
}

export default Submit