import {React, useState} from 'react'
import './signForm.scss'

import { store } from '../../Store'
import { useDispatch } from 'react-redux'
import { setCurrentUser } from '../../Reducers/userProfile/userProfile'
import { login } from '../../Reducers/Login/login'
import { useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'


export default function SignForm() {

  const dispatch = useDispatch()
  const redirect = useNavigate()

  const [logError, setLogError] = useState(false)
  
  function handleSubmit(mail, passWord, event){
    const userLogin= {
      email:mail,
      password:passWord
    }
    const body =  JSON.stringify(userLogin)
    fetch(`http://localhost:3001/api/v1/user/login`, {
      method: 'POST',
      headers: { "Content-Type":"application/json" },
      body:body
    })
    .then (r=> {
      if(r.status===200){
        return r.json()
        .then(r=>{
          dispatch(login(r.body.token))
          loadProfile()
        })
        .then(
          redirect("/user", { state: { logged: true }})
        )
      }
      else{
        event.target.username.className= `sign__form__input sign__form__input--red`
        event.target.password.className= `sign__form__input sign__form__input--red`
        setLogError(true)
        return
      }
    })
  }

  function loadProfile(){
    fetch(`http://localhost:3001/api/v1/user/profile`, {
      method: 'POST',
      headers: { "Authorization":`Bearer ${store.getState().login.token}` },
    })
    .then (r=> {
      if(r.status===200){
        return r.json()
        .then(r=>{
          dispatch(setCurrentUser(r.body))
        })
      }
    })
  }


  return (
    <div className='sign' onSubmit={e => {e.preventDefault(); handleSubmit (e.target.username.value, e.target.password.value, e)}}>
      <form className='sign__form'>
        <FontAwesomeIcon icon={faCircleUser} className='sign__form__icon' />
        <h2>Sign In</h2>
        <label className='sign__form__label' htmlFor="username">Username</label>
        <input className='sign__form__input' type="text" id="username"></input>
        <label className='sign__form__label' htmlFor="password">Password</label>
        <input className='sign__form__input' type="password" id="password"></input>
        <div className='sign__form__remember'>
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me" className='sign__form__remember__label'>Remember me</label>
        </div>
        {logError && <p className='sign__form__error'>Identifiant ou mot de passe erroné</p>}
        <button 
          className='sign__form__button' 
          type="submit"
          >
            Sign In
          </button>
      </form>
    </div>
  )
}
