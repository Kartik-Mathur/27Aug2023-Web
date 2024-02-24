import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

const SERVER_URL = "http://localhost:4444";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
    const navigate = useNavigate();

  const formHandler = async (ev) => {
    ev.preventDefault();
    axios.defaults.withCredentials = true;
    console.log(username);
    console.log(password);
    try {
      let { data } = await axios.post(SERVER_URL + "/signup", {
        username,
        password,
      });
      if (data.signedUp) {
        navigate('/login');
      } else {
        navigate('/signup');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const usernameHandler = (ev) => {
    setUsername(ev.target.value);
  };

  const passwordHandler = (ev) => {
    setPassword(ev.target.value);
  };

  return (
    <div>
      <form onSubmit={formHandler}>
        <input
          onChange={usernameHandler}
          type="text"
          placeholder="Enter username"
          value={username}
        />

        <br />

        <input
          onChange={passwordHandler}
          type="password"
          placeholder="Enter password"
          value={password}
        />

        <br />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
