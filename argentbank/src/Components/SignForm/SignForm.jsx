import React from 'react'
import './signForm.scss'

export default function SignForm() {
  return (
    <div className='sign'>
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
        <button className='sign__form__button' type="button">Sign In</button>
      </form>
    </div>
  )
}
