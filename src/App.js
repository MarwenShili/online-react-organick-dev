import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import React, { useContext, useEffect, useState } from "react";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import Login from "./Pages/Login/Login";
import ThemeProvider from "./contexts/ThemeContext";
import CartPage from "./Pages/CartPage/CartPage";
import Register from "./Pages/Register/Register";
import { useDispatch, useSelector } from "react-redux";
import { setIsAuthenticated } from "./store/slices/authSlice";

export const AuthContext = React.createContext();
function App() {
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.auth);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const token = localStorage.getItem("organick_token");

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
      dispatch(setIsAuthenticated(true));
    } else {
      dispatch(setIsAuthenticated(false));
    }
  }, []);

  return (
    <ThemeProvider>
      <AuthContext.Provider value={{ user: {}, setIsLoggedIn, isLoggedIn }}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>

            <Footer />
          </div>
        </BrowserRouter>
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;
