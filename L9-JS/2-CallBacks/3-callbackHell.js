function download(cb) {
    console.log("Download starts");
    setTimeout(() => {
        console.log("Download complete");
        cb(upload);
    }, 3000);
}

function upload() {
    console.log("Upload starts");
    setTimeout(() => {
        console.log("Upload complete");
    }, 3000)
}

download(
    function compress() {
        console.log("Compression starts");
        setTimeout(() => {
            console.log("Compression complete");
            upload();
        }, 3000);
    })

