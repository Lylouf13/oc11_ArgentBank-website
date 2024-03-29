import React from 'react'

import './bankAccount.scss'

export default function BankAccount() {
  return (
    <div className='account'>
        <div className='account__data'>
            <p className='account__data__text'> Test Name</p>
            <p className='account__data__balance'>Test$</p>
            <p className='account__data__text'> testStatus</p>
        </div>
        <button className='account__button'>View Transactions</button>
    </div>
  )
}
