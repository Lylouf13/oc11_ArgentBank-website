import React from 'react'
import logo from '../../Assets/Images/argentBankLogo.png'
import icon from '../../Assets/Images/icon-chat.png'

import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { logout } from '../../Reducers/Login/login'
import { disconnectedUser } from '../../Reducers/userProfile/userProfile'
import './header.scss'

export default function Header() {
  const logged = useSelector(state=> state.login.logged)
  const dispatch = useDispatch()

  function clickHandler(){
    dispatch(logout())
    dispatch(disconnectedUser())
  }

  return (
    <header className='header'>
        <img className='header__logo' src={logo} alt="logo ArgentBank"/>
        {logged ?
          <Link to="/"className='header__sign' onClick={clickHandler}><img className='header__icon' src={icon} alt='log icon' />Log Out</Link>
          :
          <Link to="/sign"className='header__sign'><img className='header__icon' src={icon} alt='log icon' />Sign in</Link>
        }
    </header>
  )
}
