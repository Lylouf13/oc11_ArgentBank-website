import React from 'react'
import logo from '../../Assets/Images/argentBankLogo.png'
import icon from '../../Assets/Images/icon-chat.png'

import { Link } from 'react-router-dom'

import './header.scss'

export default function Header() {
  return (
    <header className='header'>
        <img className='header__logo' src={logo} alt="logo ArgentBank"/>
        <Link to="/sign"className='header__sign'><img className='header__icon' src={icon} alt='log icon' />Sign in</Link>
    </header>
  )
}
