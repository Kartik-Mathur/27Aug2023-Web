let btn = document.querySelector('.btn');
btn.addEventListener('click', (ev) => {
    axios.get('https://meowfacts.herokuapp.com/?count=5')
    .then((data) => {
        let factsList = document.querySelector('.factsList');
    
        console.log(data);
        factsList.innerText = '';
        data = data.data.data;
        console.log(data)
        data.forEach(d => {
            // console.log(d)
            let div = document.createElement('div');
            div.classList.add('factItemParent');
            div.innerHTML = `
            <li class="factItem">${d}</li>
            <div class="btnGrp">
                <button class="deleteBtn">X</button>
                <button class="downBtn">↓</button>
                <button class="upBtn">↑</button>
            </div>
        `
            console.log(div);
            // li.classList.add('factItem')
            factsList.appendChild(div);
        });
    })
    .catch(err => {
        console.log(err);
    })
})