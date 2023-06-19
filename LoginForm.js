import React, { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
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
    loginUser(formData);
  };

  const loginUser = (userData) => {
    // Simulate API request/response
    const fakeApiResponse = {
      success: true,
      message: 'User login successful!',
    };

    // Display API response
    console.log(fakeApiResponse);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
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
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
