import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { modifyCurrentUser } from '../../Reducers/userProfile/userProfile'

import BankAccounts from '../../Containers/BankAccounts/BankAccounts'


export default function User() {

  const profile = useSelector(state => state.userProfile)
  const token = useSelector(state=> state.login.token)
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
          console.log(r)
          dispatch(modifyCurrentUser(myBody.userName))
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
    <>
      <div>Bonjour, {profile.firstName || 'first Name'} {profile.lastName || 'last Name'}</div>
      <button onClick={openEdit}>Edit Name</button>
      {edit && 
      <div>mode Edition
        <form onSubmit={e => {e.preventDefault(); confirmEdit(e.target.userName.value)}}>
          <label className='edit__form__label' htmlFor="userName">User Name</label>
          <input className='edit__form__input' type="text" id="userName"></input>
          <label className='edit__form__label' htmlFor="firstName">First Name</label>
          <input className='edit__form__input' type="text" id="firstName" readOnly defaultValue={profile.firstName} ></input>
          <label className='edit__form__label' htmlFor="lastName">Last Name</label>
          <input className='edit__form__input' type="text" id="lastName" readOnly defaultValue={profile.lastName} ></input>
          <button>Edit User Name</button>
        </form>
      </div>
      }
      <BankAccounts />
    </>
   
  )
}
