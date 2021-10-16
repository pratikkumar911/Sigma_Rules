import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import {AuthContextProvider} from '../src/context/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
