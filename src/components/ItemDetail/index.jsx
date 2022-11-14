import React from 'react'

const ItemDetail = ({character}) => {
  console.log(character);
  return (
    <div>
      <h1>Detalle</h1>
    <img src={character.image} width={250}/>
    <h1>{character.name}</h1>
    </div>
  )
}

export default ItemDetail