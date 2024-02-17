import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GrandParent from './components/GrandParent';
import Blogs from './User/Blogs';
import FinalApp from './FinalApp';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <BrowserRouter>
    <div>
      <FinalApp />
      <App />
    </div>
  </BrowserRouter>
);
