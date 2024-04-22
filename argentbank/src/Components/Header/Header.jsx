import React from 'react'
import logo from '../../Assets/Images/argentBankLogo.webp'

import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket, faCircleUser } from '@fortawesome/free-solid-svg-icons'

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
        <Link to="/"className='header__sign'>
          <img className='header__logo' src={logo} alt="logo ArgentBank"/>
        </Link>
        {logged ?
          <div className='header__containerHorizontal'>
            <Link to="/user" className='header__user'>
              <FontAwesomeIcon icon={faCircleUser} className='header__icon' />
              {user}
            </Link>
            <Link to="/"className='header__sign' onClick={clickHandler}>
              <FontAwesomeIcon icon={faRightFromBracket} className='header__icon' />
              Log Out
            </Link>
          </div>
          :
          <Link to="/sign"className='header__sign'>
            <FontAwesomeIcon icon={faCircleUser} className='header__icon' />
            Sign in
          </Link>
        }
    </header>
  )
}
