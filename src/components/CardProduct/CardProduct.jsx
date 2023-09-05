import React from "react";
import "./CardProduct.css";
import { useNavigate } from "react-router-dom";
import { Card } from "antd";
import cartIcon from "../../assets/icons/cart.svg";
import { Rate } from "antd";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";

const { Meta } = Card;

function CardProduct({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const HandleNavigate = () => {
    navigate(`/products/${product.id}`, { state: product });
  };
  const AddItemToCart = (e) => {
    e.stopPropagation();
    dispatch(
      addToCart({
        ...product,
        count: 1,
      })
    );
  };
  return (
    <Card
      onClick={HandleNavigate}
      style={{
        width: 300,
      }}
      cover={
        <img alt="example" src={product.attributes.image.data.attributes.url} />
      }
      className="new_card"
      title={
        <HeaderCard
          category={product.attributes.type}
          handleAdd={AddItemToCart}
        />
      }
    >
      <Meta title={product.attributes.name} />
      <div className="prices">
        <div>
          Price :
          <span className="before_discount">
            ${product.attributes.priceBeforeDiscount}
          </span>{" "}
          <span className="after_discount">
            ${product.attributes.priceAfterDiscount}
          </span>
        </div>
        <Rate
          disabled
          className="rate"
          defaultValue={product.attributes.rating}
        />
      </div>
    </Card>
  );
}

export default CardProduct;

const HeaderCard = ({ category, handleAdd }) => {
  return (
    <div className="header_card">
      <p className="category">{category}</p>
      <span onClick={handleAdd}>
        <img src={cartIcon} alt="" />
      </span>
    </div>
  );
};
