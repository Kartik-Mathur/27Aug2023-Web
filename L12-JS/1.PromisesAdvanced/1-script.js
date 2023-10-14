function download(url) {
    console.log("Download Starts");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Download Completed");
            let file = url.split('/').pop();
            if (file != 'file.mp4') {
                return reject("Kya Bhej diya yeh");
            }
            resolve(file);
        }, 3000);
    })
}

function compress(file) {
    console.log("Compression Starts");
    return new Promise((resolve, reject) => {
        if (['mp4', 'png', 'jpeg'].indexOf(file.split('.').pop()) == -1)
            return reject("Galat Extension ki file compress nhi krunga");

        setTimeout(() => {
            console.log("Compression Completed");
            let cmpFile = file.split('.')[0] + '.zip';
            resolve(cmpFile);
        }, 3000);
    })
}

function upload(cmpFile) {
    console.log("Uploading starts");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Uploading completed");
            let newUrl = 'http://newsite.com/'+cmpFile;
            resolve(newUrl);
        }, 3000);
    })
}

download("http://site.com/file.mp4")
    .then(compress)
    .then(upload)
    .then((newurl)=>{
        console.log(newurl)
    })
    .catch((err) => {
        console.log(err);
    })