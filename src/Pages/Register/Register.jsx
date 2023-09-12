import React, { useContext, useState } from "react";
import "../Login/Login.css";
import { AuthContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../store/slices/authSlice";
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

function Register() {
  const auth = useContext(AuthContext);
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);

  const [username, setUserName] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const navigate = useNavigate();

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
      setPasswordError("Password is not valid");
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
    // validatePassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError && !passwordError) {
      console.log("success");
      //   auth.setIsLoggedIn(true);
      //   navigate("/");

      dispatch(register({ username, email, password }));
    } else {
      console.log("error");
    }
  };
  return (
    <div className="login_page">
      <h3>Register</h3>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <input
            name="username"
            value={username}
            type="text"
            placeholder="enter your username"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
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
        <p className="error_msg">{error}</p>
      </form>
    </div>
  );
}

export default Register;
