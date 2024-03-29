import React from 'react'

import BankAccount from '../../Components/BankAccount/BankAccount'
import './bankAccounts.scss'


export default function BankAccounts() {
  return (
    <div className='accounts'>
        <BankAccount/>
        <BankAccount/>
        <BankAccount/>
        <BankAccount/>
    </div>
  )
}
