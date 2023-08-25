import React from "react";
import bannerImg from "../../assets/icons/Banner.svg";
import "./Home.css";
function Home() {
  //here you can declare the products array => 7/
  return (
    <div className="home_page">
      <img className="banner_img" src={bannerImg} alt="" />
      <div className="content">
        try here
        {/*
       code of cards here
       1/ create a folder named Card in the component folder
       2/ create Card.jsx and Card.css in the Card component 
       3/ export the Card component with "export default Card"
       4/ import the Card component in Home.jsx 
       5/ put the Card component in the content 
       6/ in Home.jsx create an array named products of 5 objects each object has  id :string, image :string, name : string , description : string , newPrice : number , oldPrice : number ,category : string , rate : number
       7/ in Home.jsx in the jsx part (html) map the array of products and in each iteration call the Card Component and pass the object as a props 
      */}
      </div>
    </div>
  );
}

export default Home;
