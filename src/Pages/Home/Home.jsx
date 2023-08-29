import React, { useContext } from "react";
import bannerImg from "../../assets/icons/Banner.svg";
import "./Home.css";
import CardProduct from "../../components/CardProduct/CardProduct";
import { ThemeContext } from "../../contexts/ThemeContext";

function Home() {
  const themeValues = useContext(ThemeContext);
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
    <div
      className={themeValues.theme === "light" ? "home_page" : "home_page dark"}
    >
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
