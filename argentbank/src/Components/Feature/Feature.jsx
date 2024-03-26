import React from 'react'

import './Feature.scss'

export default function Feature(content) {
  return (
    <div className='feature'>
        <img className='feature__icon'src={content.image} alt={content.alt || ""}/>
        <p className='feature__title'>{content.title}</p>
        <p className='feature__text'>{content.text}</p>
    </div>
  )
}
