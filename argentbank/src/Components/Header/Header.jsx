import React from 'react'
import logo from '../../Assets/Images/argentBankLogo.png'
import icon from '../../Assets/Images/icon-chat.png'

import './header.scss'

export default function Header() {
  return (
    <header className='header'>
        <img className='header__logo' src={logo} alt="logo ArgentBank"/>
        <a className='header__sign'><img className='header__icon' src={icon} />Sign in</a>
    </header>
  )
}
