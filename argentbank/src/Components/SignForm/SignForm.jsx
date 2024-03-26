import React from 'react'
import './signForm.scss'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default function SignForm() {
  return (
    <>
      <Header />
      <div className='sign'>
        <form className='sign__form'>
          <h2>Sign in</h2>
          <label className='sign__form__label' id="username">Username</label>
          <input className='sign__form__input' type="text"></input>
          <label className='sign__form__label' id="Password">Password</label>
          <input className='sign__form__input' type="text"></input>
          <label className='sign__form__label' id="submit"></label>
          <div className='sign__form__remember'>
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div>
          <button className='sign__form__button' type="button">Sign In</button>
        </form>
      </div>
      <Footer />
    </>
  )
}
