import React from "react";
import Item from "../Item";
import './estilos.css'

const ItemList = ({ products }) => {
  return (
    <div className="productos">
      {products.map((product) => {
        return <Item key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ItemList;
