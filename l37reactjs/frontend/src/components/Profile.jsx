import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';

const SERVER_URL = "http://localhost:4444";


const Profile = () => {
    const [username,setUsername] = useState("");
    const [loggedIn, setLoggedIn]=useState(false);
    const navigate = useNavigate();

    useEffect(async ()=>{
        let {data} = await axios.get(SERVER_URL+'/');
        console.log(data);
        if(!data.loggedIn){
            navigate('/login');
        }
        setUsername(data.username);
        setLoggedIn(true);
    },[]);
  return (
    <div>Welcome {username}</div>
  )
}

export default Profile