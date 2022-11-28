import React, { useState } from 'react'
import InputConError from '../inputConError';
import ItemCount from '../ItemCount';
import './estilos.css'

const ItemDetail = ({character}) => {

  const [cantidadItemDetail, setCantidadItemDetail] = useState(0);

  const confirmarCompra = (cantidad) =>{
    console.log(cantidad);
    setCantidadItemDetail(cantidad)
  }

  console.log(character);
  return (
    <div>
    <img src={character.image} width={250}/>
    <h1>{character.name}</h1>
    <button className='bot__1'>Boton</button>
    <InputConError/>
    {cantidadItemDetail ?
      <button className='botOn'>Ir al Carrito</button>
      :
    <ItemCount
      onAdd={confirmarCompra} initial={1} stock={10}/>
      
      }
    </div>
  )
}

export default ItemDetail