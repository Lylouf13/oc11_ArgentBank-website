import React from 'react'
import Feature from '../../Components/Feature/Feature'

import chatIcon from '../../Assets/Images/icon-chat.webp'
import moneyIcon from '../../Assets/Images/icon-money.webp'
import securityIcon from '../../Assets/Images/icon-security.webp'

import './Features.scss'

export default function Features() {
  return (
    <div className='features'>
        <Feature 
            image={chatIcon} 
            title={"You are our #1 priority"}
            text={"Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."}/>
        <Feature
            image={moneyIcon} 
            title={"More savings means higher rates"}
            text={"The more you save with us, the higher your interest rate will be!"}
            background={true}
            />
        <Feature 
            image={securityIcon} 
            title={"Security you can trust"}
            text={"We use top of the line encryption to make sure your data and money is always safe."}/>
    </div>
  )
}
