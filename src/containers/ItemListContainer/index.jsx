import React, {useEffect, useState} from 'react';
import './estilos.css';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';

export default function ItemListContainer ({greeting}) {

    const [products, setProducts] = useState([])

    const {categoryId} = useParams()



    useEffect(()=> {
        ( async ()=> {
            try {
                let response;
                if (categoryId) {
                    response = await fetch(`https://rickandmortyapi.com/api/character/?species=${categoryId}`);
                } else {
                    response = await fetch(`https://rickandmortyapi.com/api/character`);
                }
                const data = await response.json();
                setProducts(data.results)
            } catch (error) {
            }
        })()
    }, [categoryId])

    return (
        <>
            <ItemList products={products}/>
        </>
    )
}