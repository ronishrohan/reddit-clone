
import Main from './components/main/Main'
import { RootContainer } from './GlobalStyles'
import React from 'react'
import Navbar from './components/navbar/Navbar'

function App() {
  return<>
    <RootContainer>
      <Navbar></Navbar>
      <Main></Main>
    </RootContainer>
  </>
}

export default App