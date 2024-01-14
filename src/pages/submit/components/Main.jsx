import React from 'react'
import { SubmitContainer } from './Main.styled'
import Submit from './submit/Submit'
import Rules from './rules/Rules'
function Main() {
  return (
    <SubmitContainer>
      <Submit></Submit>
      <Rules></Rules>
    </SubmitContainer>
  )
}

export default Main