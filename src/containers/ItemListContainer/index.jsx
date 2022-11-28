import React, {useEffect, useState} from 'react';
import './estilos.css';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';
import Ad from '../../components/Ad';

export default function ItemListContainer ({greeting}) {

    const [products, setProducts] = useState([])

    const [adView, setAdView] = useState (true)

    const {categoryId} = useParams()

    const handleClose = () =>{
        setAdView(false);
    }

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

    useEffect(() => {
        const handleEsc = (evento) => {
            console.log(evento);

            if (evento.keyCode === 27) {
                setAdView(false)
                window.removeEventListener("keydown", handleEsc);
            }

        };

        window.addEventListener("keydown", handleEsc);

        return () => {
            console.log("Se desmontará el componente, por lo tanto desrregistramos el evento");
        };
    }, []);



    return (
        <>
       {products.length ? (
                <ItemList products={products} />
            ) : (
                <h2>Loadingggggg</h2>
            )}

            {adView ? <Ad>
                <h1>Anunciazo</h1>
                <button onClick={handleClose}>Cerrar</button>

            </Ad>
            :
            null
            }
        </>
    )
    
}