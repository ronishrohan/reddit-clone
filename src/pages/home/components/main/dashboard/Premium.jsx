import React from 'react'
import { PremiumContainer, TryNowButton } from '../../Main.styled'

function Premium() {
  return (
    <PremiumContainer>
        <div>
            <i className="fa-solid fa-shield-halved"></i>
            <div >
                <div>Reddit Premium</div>
                <div>The best Reddit experience</div>
            </div>
            
        </div>
        <TryNowButton onClick={() => {window.location = "https://www.reddit.com/premium"}} >Try Now</TryNowButton>
    </PremiumContainer>
  )
}

export default Premium