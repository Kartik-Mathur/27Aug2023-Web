const path = require('path');

let outerPath = 'c:/work/';
let innerPath = '/temp/file.txt';

console.log(outerPath+innerPath);
// When we want to join two different paths
// /a, /b  --> /a/b
// /a, b  --> /a/b
// /a/, /b  --> /a/b

// We use path module for this job
console.log(path.join(outerPath,innerPath));
console.log(path.join('/a/','/b/'));
console.log(path.join('/a/','b/'));
console.log(path.join('/a','/b/'));
console.log(path.join('/a','b/'));