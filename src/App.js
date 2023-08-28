import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import React, { useState } from "react";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import Login from "./Pages/Login/Login";

export const AuthContext = React.createContext();

function App() {
  let usr = { id: 1, name: "marwen shili", email: "marwen@gmail.com" };
  const [user, setUser] = useState(usr);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ user, setIsLoggedIn, isLoggedIn }}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
