import React from "react";
import "./ProductDetails.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
function ProductDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  let product = location.state;
  function handleBack() {
    navigate(-1);
  }
  return (
    <div className="product_details">
      {product?.name}

      <h2 onClick={handleBack}>Back</h2>
    </div>
  );
}

export default ProductDetails;
