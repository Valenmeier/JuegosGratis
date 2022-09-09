import React from 'react'
import logo from "./JuegosGratisLogo.png"
import "./logo.css"


export const Logo = () => {
  return (
    <div className='logo'>
        <img src={logo} alt="JuegosGratisLogo" />
        <h4>JuegosGratis</h4>
    </div>
  )
}
