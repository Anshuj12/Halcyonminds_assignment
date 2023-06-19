import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import faker from 'faker';

import './index.css';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

// Fake API interceptor
axios.interceptors.request.use((config) => {
  console.log('Fake API Request:', config);
  return config;
});

axios.interceptors.response.use((response) => {
  console.log('Fake API Response:', response);
  return response;
});

ReactDOM.render(
  <React.StrictMode>
    <RegistrationForm />
    <LoginForm />
  </React.StrictMode>,
  document.getElementById('root')
);
