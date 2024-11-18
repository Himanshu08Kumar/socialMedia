import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.css';

const Signup = () => {

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    location: '',
    occupation: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Registration successful');
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1>Signup</h1>
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="Enter your first name"
          value={formData.firstname}
          onChange={handleChange}
        />
        
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Enter your last name"
          value={formData.lastname}
          onChange={handleChange}
        />
        
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
        
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />
        
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Enter your location"
          value={formData.location}
          onChange={handleChange}
        />
        
        <label htmlFor="occupation">Occupation</label>
        <input
          type="text"
          name="occupation"
          id="occupation"
          placeholder="Enter your occupation"
          value={formData.occupation}
          onChange={handleChange}
        />
        
        <button type="submit">Submit</button>
        <p>
          Already have an Account? <Link to="/login" id="link">Click Here</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
