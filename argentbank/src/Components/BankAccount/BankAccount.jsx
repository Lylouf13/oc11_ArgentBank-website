import React from 'react'

import './bankAccount.scss'

export default function BankAccount() {

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  const accountId = randomInt(100, 500)
  const accountBalance = randomInt(1000, 5000)

  return (
    <div className='account'>
        <div className='account__data'>
            <p className='account__data__text'>Account {accountId}</p>
            <p className='account__data__balance'>{accountBalance}.00 $</p>
            <p className='account__data__text'>Current balance</p>
        </div>
        <button className='account__button'>View Transactions</button>
    </div>
  )
}
