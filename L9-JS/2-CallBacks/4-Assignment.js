// Download will take 3 seconds
function download(url, cb) {
    // console.log(url);
    console.log("Download Starts");
    setTimeout(() => {
        let fileName = url.split('/').pop();
        // console.log(fileName);
        console.log("Download Complete", fileName);
        cb(fileName, upload);
    }, 3000);

}
// Compression will take 3 seconds
function compress(fileName, cb) {
    // File.mp4 -->  file.zip
    console.log("Compression Starts");
    setTimeout(() => {
        let compressedFile = fileName.split('.')[0] + '.zip';
        console.log("Compression Complete",compressedFile);
        cb(compressedFile,allDone);
    }, 3000);
}

// Upload will take 3 seconds
function upload(compressedFile, cb) {
    // new url should be http://newcb.com/file.zip
    console.log("Uploading starts");
    setTimeout(()=>{
        let newUrl = 'http://newcb.com/'+compressedFile;
        console.log("Uploading Complete",newUrl);
        cb(newUrl);
    },3000);
}

function allDone(newUrl) {
    console.log("All done", newUrl);
}

let url = 'http://cb.com/file.mp4';
download(url, compress);