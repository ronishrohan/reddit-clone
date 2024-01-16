import React from 'react'
import { PremiumContainer, TryNowButton } from '../../../../subreddit/components/main/Main.styled'

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
        <TryNowButton>Try Now</TryNowButton>
    </PremiumContainer>
  )
}

export default Premium