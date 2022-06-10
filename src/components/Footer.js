import React from 'react'
import { Email, Instagram, Twitter } from '@material-ui/icons'
import '../styles/Footer.css'
const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Twitter />
        <Email />
        <Instagram />
      </div>
      <p> &copy; 2022 supremeJoe.com </p>
    </div>
  )
}

export default Footer
