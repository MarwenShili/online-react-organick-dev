import React from "react";
import "./CardProduct.css";
import { useNavigate } from "react-router-dom";
function CardProduct({ product }) {
  const navigate = useNavigate();

  const HandleNavigate = () => {
    navigate(`/products/${product.id}`, { state: product });
  };
  return (
    <div className="card" onClick={HandleNavigate}>
      <img src="" alt="" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="price">
        <p>
          Price : <span>{product.price}</span>
        </p>
      </div>
    </div>
  );
}

export default CardProduct;
