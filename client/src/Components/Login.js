import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './CSS/UserForm.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login} = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/users/login', { email, password });
      const { userData } = response.data;
      login(userData);
      console.log(userData);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className='userform'>
      <center>
        <div className='subform'>
        <h1>User Login</h1>
        <form className="login-form" onSubmit={handleSubmit} autoComplete='off'>
          <div className="form-group">
            <label className='form-label' htmlFor="email">Email:</label>
            <input
            className='form-control'
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className='form-label'>Password:</label>
            <input
              className='form-control'
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className='btn btn-primary w-100' type="submit">Login</button>
        </form>
        </div>
      </center>
    </div>
  );
};

export default Login;
