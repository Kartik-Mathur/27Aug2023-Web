import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GrandParent from './components/GrandParent';
import Blogs from './User/Blogs';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    
    {/* <GrandParent /> */}
    <App />
  </React.StrictMode>
);
