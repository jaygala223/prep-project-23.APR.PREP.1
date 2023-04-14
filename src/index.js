import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Geolocation from './Geolocation';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Geolocation />
  </React.StrictMode>,
  document.getElementById('root')
);
