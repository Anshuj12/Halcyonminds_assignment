import React, { useState } from 'react';
import faker from 'faker';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API request
    registerUser(formData);
  };

  const registerUser = (userData) => {
    // Simulate API request/response
    const fakeApiResponse = {
      success: true,
      message: 'User registration successful!',
    };

    // Display API response
    console.log(fakeApiResponse);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
