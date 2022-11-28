import React, { useState } from "react";
import './estilos.css'

const ItemCount = ({onAdd, stock, initial}) => {

    const [count, setCount] = useState(initial);

    const onPlus = () => {
        if (count < stock) setCount(count + 1)
    }

    const onDecrement = () => {
        if (count > initial) setCount(count - 1)
    }
    return <div>
        <button className="botOn" onClick={onDecrement}>-</button>
        <span className="contador">{count}</span>
        <button className="botOn" onClick={onPlus}>+</button>
        <button className="botOn" onClick={()=>onAdd(count)}>Confirmar compra</button>
    </div>;
};

export default ItemCount;