fetch('https://meowfacts.herokuapp.com/')
    .then((res)=>{
        // console.log("Response",res);
        return res.json();
    })
    .then((data)=>{
        console.log(data.data[0]);
        // for(i = 0 ; i <data.length ; i++){
        //     console.log(data[i]);
        // }
    })
    .catch((err)=>{
        console.log(err);
    })