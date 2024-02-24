import './App.css';
import { useState } from 'react';
import Login from './components/Login';
import Profile from './components/Profile';
import Signup from './components/Signup';
import { NavLink, Routes, Route } from 'react-router-dom';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const updateLogin = (val)=>{
    setLoggedIn(val);
  }
  return (
    <>
      <div className='navbar'>
        {!loggedIn && <NavLink className="navItem" to="/login">Login</NavLink>}
        {loggedIn && <NavLink className="navItem" to="/logout">Logout</NavLink>}
        <NavLink className="navItem" to="/signup">Signup</NavLink>
      </div>

      <Routes>
        <Route path="/login" element={<Login updateLogin={updateLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
