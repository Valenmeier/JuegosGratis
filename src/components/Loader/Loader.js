import React from 'react'
import "./loader.css"



export const Loader = ({text}) => {
  return (
    <div className='loaderContenedor'>
        <h4>Cargando {text}, <br /> gracias por su paciencia</h4>
        <span className='loader'></span>
    </div>
  )
}
