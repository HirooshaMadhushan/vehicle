import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
    company: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        alert(result.message); // Success message
      } else {
        alert(result.error); // Error message
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
  };

  return (
    <div className="mt-4 mb-20 dark:bg-gray-900">
      <form onSubmit={handleSubmit} className="max-w-md pt-4 pb-4 mx-auto">
      
        <div className="relative z-0 w-full mb-10 mt-11 group">
          
            
          
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2"
            placeholder=" "
            required
          />
          <label htmlFor="email" className='text-white'>Email address</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2"
            placeholder=" "
            required
          />
          <label htmlFor="password" className='text-white'>Password</label>
        </div>
        
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2"
            placeholder=" "
            required
          />
          <label htmlFor="confirmPassword" className='text-white'>Confirm password</label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2"
              placeholder=" "
              required
            />
            <label htmlFor="firstName" className='text-white'>First name</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2"
              placeholder=" "
              required
            />
            <label htmlFor="lastName" className='text-white'>Last name</label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2"
              placeholder=" "
              required
            />
            <label htmlFor="phone" className='text-white'>Phone number (123-456-7890)</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2"
              placeholder=" "
              required
            />
            <label htmlFor="company" className='text-white'>Company (Ex. Google)</label>
          </div>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 px-5 py-2.5">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
