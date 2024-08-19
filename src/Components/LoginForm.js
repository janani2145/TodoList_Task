import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const StateForm = () => {
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();

    const addData = (e) => {
        e.preventDefault();
        setEmailError("");
        setPasswordError("");
        let isValid = true;
        if (!email) {
            setEmailError("Email is required.");
            isValid = false;
        }
        if (!password) {
            setPasswordError("Password is required.");
            isValid = false;
        } 

        if (!isValid) 
            return;
        const newUser = { email, password };
        const updatedUsers = [...users, newUser];
        setUsers(updatedUsers);

        localStorage.setItem('users', JSON.stringify(updatedUsers));

        setEmail("");
        setPassword("");
        navigate("/table");
    };

    return (
        <div className='vh-100 mt-5 pt-5'>
        <div className="container  mt-5 pt-5 text-white d-flex justify-content-center  align-items-center">
            <form onSubmit={addData} className='form p-5 rounded-5 shadow '>
                <h1 className='text-center text-dark'>Login</h1>

               
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="email"
                        className="form-control m-0"
                        id="email"
                        name="email"
                        value={email}
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && <p className="text-danger p-0 m-0">{emailError}</p>}
             
               
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={password}
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {passwordError && <p className="text-danger p-0 m-0">{passwordError}</p>}
                
                <button type="submit" className="btn btn-success w-100 mt-4 ">Submit</button>
            </form>
        </div>
        </div>
    );
}

export default StateForm;
