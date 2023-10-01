function goaChalega(cb){
    console.log("Ghar par puchna padega");
    cb();
}

function resultOfPuchna(){
    console.log("Nahi");
}

goaChalega(resultOfPuchna);