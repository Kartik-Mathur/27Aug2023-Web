import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements
} from "react-router-dom";


import Home from './Components/Home/Home';
import About from './Components/About/About';
import Error from './Components/Error';
import Faqs from './Components/Faqs';
import Contact from './Components/Contact';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='home' element={<Home />}></Route>
      <Route path='about' element={<About />}>
        <Route path='faqs' element={<Faqs />}></Route>
        <Route path='contact' element={<Contact />}></Route>
      </Route>
    </Route>
  ));
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "home",
//         element: <Home />
//       },
//       {
//         path:"about",
//         element: <About />
//       }
//     ]
//   }
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);