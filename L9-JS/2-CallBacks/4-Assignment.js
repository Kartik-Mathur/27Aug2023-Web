// Download will take 3 seconds
function download(){
    
}
// Compression will take 3 seconds
function compress(){
    // File.mp4 -->  file.zip
}

// Upload will take 3 seconds
function upload(){
    // new url should be http://newcb.com/file.zip
}

function allDone(newUrl){
    console.log("All done",newUrl);
}

let url = 'http://cb.com/file.mp4';
download(url);
