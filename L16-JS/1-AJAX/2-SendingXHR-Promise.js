function getData(URL){
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();

        xhr.onload = (res)=>{
            // Request Success ho gai
            // console.log(JSON.parse(res.target.response));
            resolve(JSON.parse(res.target.response));
        }

        xhr.onerror = (err)=>{
            reject(err);
        }

        xhr.open('GET',URL);

        xhr.send(); // Yeh request bhej dega
    })
}

getData('https://cat-fact.herokuapp.com/facts')
    .then((data)=>{
        // console.log("Here",data)
        data.forEach(d => {
            console.log(d.text)
        });
    })
    .catch(err=>{
        console.log(err);
    })
