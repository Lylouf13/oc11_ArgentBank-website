import React from 'react'
import './signForm.scss'

export default function SignForm() {
  return (
    <div className='sign'>
      <form className='sign__form'>
        <label className='sign__form__label' id="username">Username</label>
        <input className='sign__form__input' type="text"></input>
        <label className='sign__form__label' id="Password">Password</label>
        <input className='sign__form__input' type="text"></input>
        <label className='sign__form__label' id="submit"></label>
        <button type="button">Sign In</button>
      </form>
    </div>
  )
}
