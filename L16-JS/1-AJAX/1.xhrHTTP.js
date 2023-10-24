let URL = 'https://cat-fact.herokuapp.com/facts';
const xhr = new XMLHttpRequest(); // Object banana padta hai sabse pehle

// 1. Agar request success ho jaaye toh kya
xhr.onload = (res)=>{
    let data = JSON.parse(res.target.response);
    // console.log(data);
    data.forEach(d => {
        console.log(d.text)
    });
}

// 2. Agar request fail ho jaaye toh kya
xhr.onerror = (err)=>{
    console.log(err)
}

// 3. Request kaha kaunse URL par bhejni hai SET Krlo
// Jab data chahiye kahi server se, toh we send GET request
xhr.open('GET',URL);

// 4. Request bhejna padega pehle


let btn = document.querySelector('.btn');

btn.addEventListener('click',(ev)=>{
    xhr.send();
})