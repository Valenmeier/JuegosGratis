import React from 'react'
import "./estilosMain.css"
import {CartaDeJuegos} from '../CartaDeJuegos/Carta'

export const Main = ({titulo}) => {
    return (
    <div className='contenedorMain'>
        <h1>{titulo}</h1>
        <CartaDeJuegos/>
    </div>
  )
}
