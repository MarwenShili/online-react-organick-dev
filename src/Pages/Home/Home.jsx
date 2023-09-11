import React, { useContext, useEffect, useState } from "react";
import bannerImg from "../../assets/icons/Banner.svg";
import "./Home.css";
import CardProduct from "../../components/CardProduct/CardProduct";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../store/slices/productsSlice";

function Home() {
  const themeValues = useContext(ThemeContext);
  const dispatch = useDispatch();

  const { products, isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div
      className={themeValues.theme === "light" ? "home_page" : "home_page dark"}
    >
      <img className="banner_img" src={bannerImg} alt="" />
      <div className="content">
        {products.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
        {isLoading && <h1>Loading ...</h1>}
        {products.length === 0 && <h1>Not Data Found</h1>}
      </div>
    </div>
  );
}

export default Home;
