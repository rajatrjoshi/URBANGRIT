import React from 'react'
import { AiFillInstagram, AiOutlineTwitter, AiFillLinkedin, AiFillAppstore } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2024 UrbanGrit All rights reserved</p>
      <p className='icons'>
        <AiFillLinkedin />
        <AiFillInstagram />
        <AiOutlineTwitter /> 
        <AiFillAppstore />
      </p>
    </div>
  )
}

export default Footer
