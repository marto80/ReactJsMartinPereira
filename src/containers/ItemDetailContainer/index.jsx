import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ItemDetail from "../../components/ItemDetail";

const ItemDetailContainer = () => {

    const {id} = useParams()

    const [character, setCharacter] = useState (null)

    useEffect(() => {
       const getCharacterDet = async()=>{
            const response = await fetch (`https://rickandmortyapi.com/api/character/${id}`)
            const character = response.json();
            setCharacter(character)
        }
        getCharacterDet()


    }, [id])

    return(character ? <ItemDetail character={character}/> : "Cargando")
};

export default ItemDetailContainer;