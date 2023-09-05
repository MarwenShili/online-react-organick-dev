import React from "react";
import "./CartPage.css";
import { useSelector } from "react-redux";
import CardProduct from "../../components/CardProduct/CardProduct";

function CartPage() {
  const { cartProducts } = useSelector((state) => state.cart);
  console.log(cartProducts);
  return (
    <div>
      <div className="content">
        {cartProducts.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
        {cartProducts.length === 0 && <h1>Not Data Found</h1>}
      </div>
    </div>
  );
}

export default CartPage;
