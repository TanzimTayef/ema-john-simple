import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';

const Shipment = () => {
    const [user] = useAuthState
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")

    const [adress, setAdress] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");
    // const navigate = useNavigate();
    const handleCreateUser = (e) => {
      e.preventDefault();
  
    }
    return (
        <div>
      <div className="form-container">
        <div>
          <h2 className="form-title">Shipping information</h2>
          <form onSubmit={handleCreateUser}>
            <div className="input-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                onBlur={(e) => setName(e.target.value)}
                name="name"
                id=""
                placeholder="Your Email"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                 value={user?.email} readOnly
                name="email"
                id=""
                placeholder="Your Email"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="text">Adrrssd</label>
              <input
                type="text"
                onBlur={(e) => setAdress(e.target.value)}
                name="set adress"
                id=""
           
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="text">Phone Number</label>
              <input
                type="text"
                onBlur={(e) => setPhone(e.target.value)}
                name="phone"
                id=""
                required
              />
            </div>
            <p style={{color: 'red'}}>{error}</p>
            <input className="form-submit" type="submit" value="shpping" />
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

export default Shipment;