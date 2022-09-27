import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='Header'>
      <h1>
        <Link to='/'>
          <img src={process.env.PUBLIC_URL + "/assets/logo.png"} alt="" />
        </Link>
      </h1>
    </header>
  )
}

export default Header