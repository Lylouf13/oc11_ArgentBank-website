import React from 'react'

import { store } from '../../Store'
import { setCurrentUser } from '../../Reducers/userProfile/userProfile'
import { useDispatch } from 'react-redux'

import BankAccounts from '../../Containers/BankAccounts/BankAccounts'


export default function User() {

  const dispatch = useDispatch()
  const token =(store.getState().login.token)
  const userProfile = loadProfile()
  function loadProfile(){
    fetch(`http://localhost:3001/api/v1/user/profile`, {
      method: 'POST',
      headers: { "Authorization":`Bearer ${token}` },
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
    console.log(userProfile)

  return (
    <>
    {userProfile &&
      <div>Bonjour, {userProfile.firstName} {userProfile.lastName}</div>
    }
        <BankAccounts />
    </>
   
  )
}
