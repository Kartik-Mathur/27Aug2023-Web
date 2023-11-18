console.log("Running lib1");
let lib2 = require('./lib2');

let a = 10;
module.exports.a = a;
module.exports.lib2 = lib2;

// module.exports = {
//     a,
//     lib2
// }