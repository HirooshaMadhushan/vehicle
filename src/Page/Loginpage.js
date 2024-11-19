import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Loginpage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState(''); // State to store error message
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/register'); // Navigate to the Register page
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/login', formData);

      if (response.data.message === 'Login successful') {
        alert(response.data.message);
        navigate('/Home'); // Navigate to Home page on successful login
      } else {
        setErrorMessage('Login failed. Please check your email and password.');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(error.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-cyan-400'>
      <form onSubmit={handleSubmit} className="max-w-lg p-10 mx-auto bg-white shadow-lg rounded-xl">
        <h2 className='text-xl text-center text-teal-500'>Login Form</h2>
        <h3 className='text-sm text-center'>Fill out the form carefully</h3>
        {errorMessage && (
          <p className="mb-4 text-center text-red-500">{errorMessage}</p>
        )}
        <div className='flex justify-center gap-x-10'>
          <div className="pt-3 mb-3">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email:</label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="pt-3 mb-3">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password:</label>
            <input
              type="password"
              id="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className='flex justify-center pt-6 gap-x-10'>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Log In
          </button>
          <button
            type="button"
            onClick={handleClick}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Loginpage;
