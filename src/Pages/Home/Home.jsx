import React from "react";
import bannerImg from "../../assets/icons/Banner.svg";
import "./Home.css";
import CardProduct from "../../components/CardProduct/CardProduct";

function Home() {
  let products = [
    {
      id: "2",
      name: "Product 1",
      description: "description of product 1",
      price: 10,
      imgUrl: "",
      review: 4,
      discountPrice: 3,
      quantity: 3,
    },
    {
      id: "1",
      name: "Product 2",
      description: "description of product 2",
      price: 20,
      imgUrl: "",
      review: 5,
      discountPrice: 10,
      quantity: 9,
    },
  ];
  return (
    <div className="home_page">
      <img className="banner_img" src={bannerImg} alt="" />
      <div className="content">
        {products.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
