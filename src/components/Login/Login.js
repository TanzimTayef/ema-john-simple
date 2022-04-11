import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import auth from "../../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();


  if (user) {
    navigate("/shop");
    }

  const handleUserLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login</h2>
        <form onSubmit={handleUserLogin}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              onBlur={(e) => setEmail(e.target.value)}
              name="email"
              id=""
              placeholder="Your Email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              onBlur={(e) => setPassword(e.target.value)}
              name="password"
              id=""
              placeholder="Your Password"
            />
          </div>
          <p className={{ color: 'red' }}>{error?.message}</p>
          {

            loading && <p>loadding....</p>
          }
          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p>
          New to Ema-john?{" "}
          <Link className="form-link" to="/signup">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
