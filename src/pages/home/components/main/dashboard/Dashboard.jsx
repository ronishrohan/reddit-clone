import React from 'react'
import { DashboardContainer } from '../../Main.styled'
import Premium from './Premium'
import Welcome from './Welcome'
import Policy from './Policy'


function Dashboard() {
  return (
    <DashboardContainer>
      <Premium></Premium>
      <Welcome></Welcome>
      <Policy></Policy>
      
      
    </DashboardContainer>
  )
}

export default Dashboard