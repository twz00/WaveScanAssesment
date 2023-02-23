import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import InputForm from './InputForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <InputForm/>
    <App />
  </React.StrictMode>
);