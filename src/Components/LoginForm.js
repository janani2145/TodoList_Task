import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const StateForm = () => {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const addData = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
let isValid=true;
    if (email === "") {
      setEmailError("Email is required");
      isValid=false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Invalid email !Please enter valid email");
      isValid=false;
    }
    else if (users.some(user => user.email === email)) {
        setEmailError("Email is already registered");
        return;
      } 
    else {
      setEmailError("");
    }

    if (password === "") {
      setPasswordError("Password is required");
      isValid=false;
    } else if (!passwordRegex.test(password)) {
      setPasswordError("!Invalid.Atleast 8 characters eg.Jasdh050");
      isValid=false;
    } else {
      setPasswordError("");
    }

    if (!isValid){
      return;
    }
    const newUser = { email, password };
    const updateUser = [...users, newUser];
    setUsers(updateUser);
    localStorage.setItem("users", JSON.stringify(updateUser));
    navigate("/table");
    setEmail("");
    setPassword("");
    setEmailError("");
    setPasswordError("");
  };

  return (
    <div className="vh-100 pt-5">
      <div className="container mt-5 pt-5 text-dark d-flex justify-content-center align-items-center text">
        <form onSubmit={addData} className="form p-5 rounded-5 shadow">
          <h1 className="text-center text-dark">Login</h1>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder=" Enter your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="text-danger">{emailError}</p>}
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p className="text-danger">{passwordError}</p>}
          </div>

          <button type="submit" className="btn btn-success w-100 mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default StateForm;
