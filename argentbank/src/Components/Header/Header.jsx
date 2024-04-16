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
  const user = useSelector(state => state.userProfile.userName)

  const dispatch = useDispatch()
  
  function clickHandler(){
    dispatch(logout())
    dispatch(disconnectedUser())
  }
  return (
    <header className='header'>
        <img className='header__logo' src={logo} alt="logo ArgentBank"/>
        {logged ?
          <div className='header__containerHorizontal'>
            <Link to="/user" className='header__user'>
              <img className='header__icon' src={icon} alt='log icon' />
              {user}
            </Link>
            <Link to="/"className='header__sign' onClick={clickHandler}>
              <img className='header__icon' src={icon} alt='log icon' />
              Log Out
            </Link>
          </div>
          :
          <Link to="/sign"className='header__sign'><img className='header__icon' src={icon} alt='log icon' />Sign in</Link>
        }
    </header>
  )
}
