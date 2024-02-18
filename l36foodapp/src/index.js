import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom";

import bringFood from './utils/bringFood';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" loader={bringFood} element={<App />}>
      <Route path="/cart" element={<Cart />}></Route>
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={router} />
  </>
);
