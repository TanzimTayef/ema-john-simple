import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init"


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
  const handleCreateUser = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Your Password did not match");
      return;
    }
    if (password.length < 6) {
      setError("Password must be 6 cracter");
      return;
    }

    createUserWithEmailAndPassword(email, password);  
    if (user) {
      navigate("/shop")
    }

  }

  return (
    <div>
      <div className="form-container">
        <div>
          <h2 className="form-title">Sign Up</h2>
          <form onSubmit={handleCreateUser}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                onBlur={(e) => setEmail(e.target.value)}
                name="email"
                id=""
                placeholder="Your Email"
                required
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
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Confirm Password</label>
              <input
                type="password"
                onBlur={(e) => setConfirmPassword(e.target.value)}
                name="password"
                id=""
                placeholder="Confirm Password"
                required
              />
            </div>
            <p style={{color: 'red'}}>{error}</p>
            <input className="form-submit" type="submit" value="Login" />
          </form>
          <p>
            Already Have an account?{" "}
            <Link className="form-link" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
