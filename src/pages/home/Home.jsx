
import Main from './components/main/Main'
import { RootContainer } from '../../GlobalStyles'
import React from 'react'
import Navbar from '../../components/navbar/Navbar'

function Home() {
  return<>
    <RootContainer>
      <Main></Main>
    </RootContainer>
  </>
}

export default Home