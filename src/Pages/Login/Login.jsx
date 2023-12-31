import React, { useContext, useState } from "react";
import "./Login.css";
import { AuthContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/slices/authSlice";
import { Button, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
var emailRegex =
  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,40}$/;
const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);
function Login() {
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, error } = useSelector((state) => state.auth);

  const validateEmail = (value) => {
    if (emailRegex.test(value)) {
      setEmailError(null);
    } else {
      setEmailError("email is not valid");
    }
  };

  const validatePassword = (value) => {
    if (passwordRegex.test(value)) {
      setPasswordError(null);
    } else {
      setPasswordError("Password is not value");
    }
  };

  const handleEmail = (e) => {
    let value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  const handlePassword = (e) => {
    let value = e.target.value;
    setPassword(value);
    // // validatePassword(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError && !passwordError) {
      dispatch(login({ identifier: email, password }));
    } else {
      console.log("error");
    }
  };
  return (
    <div className="login_page">
      <h3>Login</h3>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            value={email}
            name="email"
            placeholder="enter your email"
            onChange={(e) => handleEmail(e)}
            className={emailError ? "error" : "valid"}
          />
          {emailError && <p className="error_msg">{emailError}</p>}
        </div>
        <div>
          <input
            name="passwoed"
            value={password}
            type="password"
            placeholder="enter your password"
            onChange={(e) => handlePassword(e)}
            className={passwordError ? "error" : "valid"}
          />
          {passwordError && <p className="error_msg">{passwordError}</p>}
        </div>
        <Button type="primary" onClick={handleSubmit}>
          {isLoading ? (
            <Spin indicator={antIcon} style={{ color: "#7EB693" }} />
          ) : (
            "Submit"
          )}
        </Button>
        <p className="error_msg">{error}</p>{" "}
      </form>
      <a href="/register">Register</a>
    </div>
  );
}

export default Login;
