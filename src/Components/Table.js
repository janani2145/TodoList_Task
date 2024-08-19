import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const StateTable = () => {
  const [users, setUsers] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  return (
    <div className="container mt-5">
      <div>
        <button className="btn btn-secondary" onClick={() => { nav("/") }}>Back</button>
      </div>
      <h1 className='text-center text-dark'>User Details</h1>
      <table className="table table-responsive table-striped text-bg-dark col-md-12">
        <thead>
          <tr>
            <th className='text-bg-secondary text-center'>SI.No</th>
            <th className='text-bg-secondary text-center'>Email</th>
            <th className='text-bg-secondary text-center '>Password</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StateTable;
