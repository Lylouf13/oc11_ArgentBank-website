import React from 'react'
import './signForm.scss'

import { useDispatch } from 'react-redux'
import { login } from '../../Reducers/Login/login'
import { useNavigate } from 'react-router-dom'



export default function SignForm() {

  const dispatch = useDispatch()
  const redirect = useNavigate()
  
  function handleSubmit(mail, passWord){
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
          redirect("/user")
        })
      }
    })
  }

  return (
    <div className='sign' onSubmit={e => {e.preventDefault(); handleSubmit (e.target.username.value, e.target.password.value)}}>
      <form className='sign__form'>
        <h2>Sign in</h2>
        <label className='sign__form__label' for="username">Username</label>
        <input className='sign__form__input' type="text" id="username"></input>
        <label className='sign__form__label' for="password">Password</label>
        <input className='sign__form__input' type="password" id="password"></input>
        <div className='sign__form__remember'>
          <input type="checkbox" id="remember-me" />
          <label for="remember-me">Remember me</label>
        </div>
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
