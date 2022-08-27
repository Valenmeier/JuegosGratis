import React from 'react'
import "./estilosMain.css"

export const Main = ({saludo}) => {
    return (
    <div className='contenedorMain'>
        <h1>{saludo}</h1>
    </div>
  )
}
