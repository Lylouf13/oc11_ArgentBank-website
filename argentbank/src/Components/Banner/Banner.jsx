import React from 'react'
import './banner.scss'
import bannerImage from '../../Assets/Images/bank-tree.jpeg'

export default function Banner() {
  return (
    <div className='banner'>
        <img className='banner__img'src={bannerImage} alt="arbre à argent"/>
        <div className='banner__container'>
            <p className='banner__container__text banner__container__text--bold'>
                No fees. <br />
                No minimum deposit. <br />
                High interest rates. <br />
            </p>
            <p className='banner__container__text'>Open a savings account with Argent Bank today!</p>
        </div>
    </div>
  )
}
