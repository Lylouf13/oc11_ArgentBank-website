import React, { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import { modifyCurrentUser } from '../../Reducers/userProfile/userProfile'
import BankAccounts from '../../Containers/BankAccounts/BankAccounts'

import './user.scss'


export default function User() {

  const profile = useSelector(state => state.userProfile)
  const token = useSelector(state=> state.login.token)
  const location = useLocation()
  const dispatch = useDispatch()
  const [edit, setEdit] = useState(false)

  function openEdit(){
    setEdit(!edit)
  }
  
  function modifyUserName(myBody){
    console.log(myBody)
    fetch(`http://localhost:3001/api/v1/user/profile`, {
      method: 'PUT',
      headers: { 
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}` },
      body: myBody
    })
    .then(r=>{
      if(r.status===200){
        return r.json()
        .then(r=>{
          dispatch(modifyCurrentUser(r.body.userName))
          setEdit(!edit)
        })
      }
    })
  }

  function confirmEdit(newUserName){
    const body =  JSON.stringify(
      {
        userName: newUserName
      }
    )
    modifyUserName(body)
  }
  return (
    <main className='user'>
      {(location.state?.logged !== true) ? (
        <Navigate to="/" replace={true}/>
      ) : (
      edit ? (
        <div>
            <h2 className='user__title'>Edit user informations</h2>
            <form className='user__form' onSubmit={e => {e.preventDefault(); confirmEdit(e.target.userName.value)}}>
              <div className='user__form__container'>
                <label className='user__form__label' htmlFor="userName">User Name</label>
                <input className='user__form__input' type="text" id="userName" defaultValue={profile.userName}></input>
              </div>
              <div className='user__form__container'>
                <label className='user__form__label' htmlFor="firstName">First Name</label>
                <input className='user__form__input user__form__input--locked' type="text" id="firstName" readOnly defaultValue={profile.firstName} ></input>
              </div>
              <div className='user__form__container'>
                <label className='user__form__label' htmlFor="lastName">Last Name</label>
                <input className='user__form__input user__form__input--locked' type="text" id="lastName" readOnly defaultValue={profile.lastName} ></input>
              </div>
              <div className='user__form__container'>
                <button className='user__cta'>Edit User Name</button>
                <button className='user__cta' onClick={e=> {e.preventDefault(); openEdit()}}>Cancel</button>
              </div>
            </form>
          </div>
        ) : (
            <div className='user__greet'>
              <h2 className='user__title'>Welcome back,<br/> {profile.firstName || 'first Name'} {profile.lastName || 'last Name'}</h2>
              <button className='user__cta' onClick={openEdit}>Edit Name</button>
            </div>
        )
      )}
      <BankAccounts />
    </main>
  )
}
