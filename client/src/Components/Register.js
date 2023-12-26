import React,{useState} from 'react'
import './CSS/Register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:8000/users/register',{username,email,password});
          console.log('Response from server:', response.data);
        } catch (error) {
          console.error('Error sending data to server:', error);
        }
        console.log('Form submitted with data:', { username, email, password });
        setUserName('');
        setEmail('');
        setPassword('');
        navigate('/login');
      };
  return (
    <div className='userform'>
      <center>
        <div className='subform1'>
         <h1 style={{marginTop:"30px"}}>Register</h1>
        <form onSubmit={handleSubmit} autoComplete='off'>
          <div>
            <label htmlFor="username">UserName:</label>
            <input
              className='form-control'
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              className='form-control'
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              className='form-control'
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button  className='btn btn-primary w-100' type="submit">Register</button>
        </form>
        </div>
        </center>
        </div>
      );
    };

export default Register
