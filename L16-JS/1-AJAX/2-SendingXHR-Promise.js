function getData(URL) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.onload = (res) => {
            // Request Success ho gai
            // console.log(JSON.parse(res.target.response));
            resolve(JSON.parse(res.target.response));
        }

        xhr.onerror = (err) => {
            reject(err);
        }

        xhr.open('GET', URL);

        xhr.send(); // Yeh request bhej dega
    })
}

let btn = document.querySelector('.btn');
btn.addEventListener('click', (ev) => {
    getData('https://meowfacts.herokuapp.com/?count=5')
        .then((data) => {
            let factsList = document.querySelector('.factsList');

            data = data.data
            console.log(data);
            factsList.innerText = '';
            
            data.forEach(d => {
                console.log(d)
                let li = document.createElement('li');
                li.innerText = d;
                console.log(li);
                factsList.appendChild(li);
            });
        })
        .catch(err => {
            console.log(err);
        })
})
