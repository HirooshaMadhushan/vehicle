import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddDetails() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  });
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform your login logic here (e.g., validation or API call)
    
    // After successful login, navigate to the HomePage
    navigate('/Login'); // This will navigate to the '/home' route
  };

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    try {
      const response = await axios.post('http://localhost:3000/api/register', formData);
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert('Error registering user');
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-cyan-400'>
      <form onSubmit={handleSubmit} className="max-w-lg p-10 mx-auto bg-white shadow-lg rounded-xl">
        <h2 className='text-xl text-center text-teal-500'>Register Form</h2>
        <h3 className='text-sm text-center'>Fill out form carefully</h3>
        <div className='flex justify-center gap-x-10'>
          <div className="pt-3 mb-3 ">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email :</label>
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
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
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

        <div className="pt-3 mb-5">
          <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900">Repeat password</label>
          <input
            type="password"
            id="confirmPassword"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="termsAccepted"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
            />
          </div>
          <label htmlFor="termsAccepted" className="ml-2 text-sm font-medium text-gray-900">
            I agree with the <a href="#" className="text-blue-600 hover:underline">terms and conditions</a>
          </label>
        </div>
        
        <div className='flex justify-center gap-x-10'>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Register new account
        </button>
        <button
          type="submit"
          onClick={handleLogin} 
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center pl-10 pr-10"
        >
          Log in
        </button>
        </div>
      </form>
    </div>
  );
}

export default AddDetails;
