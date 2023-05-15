import { useDispatch, useSelector } from "react-redux";
import "./login.css";
import { useState, useEffect } from "react";
import { loginUser } from "../../redux/authAction";

import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, userInfo, error } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  // redirect authenticated user to profile screen
  useEffect(() => {
    if (userInfo) navigate("/");
  });

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">LamaSocial</h3>
          <span className="loginDesc">
            Connects with friends and the wrold around you on LamaSocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleSubmit}>
            {error && "Error..."}
            <input
              placeholder="Email"
              className="loginInput"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              className="loginInput"
              type="password"
              minLength={6}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="loginButton" type="submit" disabled={loading}>
              {loading ? "loading..." : "Log In"}
            </button>
            <span className="loginForgot" style={{ marginTop: "5px" }}>
              Forgot Password?
            </span>
            <Link to={"/register"} style={{ marginLeft: "175px" }}>
              <button className="loginRegisterButton" type="submit">
                {loading ? "Loading..." : "Create a New Account"}
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
