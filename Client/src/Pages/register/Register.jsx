import "./register.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/authAction";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password mistach");
    }
    dispatch(registerUser({ username, email, password }));
  };

  useEffect(() => {
    // redirect user to login page if registration was successful
    if (success) navigate("/login");
    // redirect authenticated user to profile screen
    if (userInfo) navigate("/userProfile");
  }, [navigate, userInfo, success]);

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleSubmit}>
            {error && "Error..."}
            <input
              placeholder="Username"
              className="loginInput"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
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
              minLength={"6"}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              placeholder="Password Again"
              className="loginInput"
              type="password"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button className="loginButton" type="submit">
              {loading ? "loading..." : "Sign Up"}
            </button>
            <Link to={"/login"} style={{ marginLeft: "175px" }}>
              <button className="loginRegisterButton">Log into Account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
