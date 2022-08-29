import React from 'react'
import "./estilosMain.css"
import {ItemCount} from '../ItemCount/ItemCount'

export const ItemListContainer  = () => {
    return (
    <main className='contenedorMain'>
      
        <ItemCount stock={10} initial={1} product="banana"/>
    </main>
  )
}
