import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SERVER_URL = "http://localhost:4444";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios
      .get(SERVER_URL + "/")
      .then(({data}) => {
        if (!data.loggedIn) {
          navigate("/login");
        }
        setUsername(data.username);
        setLoggedIn(true);
      })
      .catch((err) => {
        navigate("/login");
      });
  }, []);
  return <div>Welcome {username}</div>;
};

export default Profile;
