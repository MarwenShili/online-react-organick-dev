import React from "react";
import "./CartPage.css";
import { useDispatch, useSelector } from "react-redux";
import CardProduct from "../../components/CardProduct/CardProduct";
import { Button, Space } from "antd";
import { removeAll } from "../../store/slices/cartSlice";

function CartPage() {
  const { cartProducts, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveAll = () => {
    dispatch(removeAll());
  };

  return (
    <div>
      <div className="content">
        {cartProducts.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}

        {cartProducts.length === 0 && <h1>Not Data Found</h1>}
      </div>
      {cartProducts.length > 0 && (
        <div className="action">
          <Button type="primary" danger onClick={handleRemoveAll}>
            Remove All
          </Button>
          <div className="price">Total : ${totalPrice}</div>
          <Button type="primary">Checkout</Button>
        </div>
      )}
    </div>
  );
}

export default CartPage;
