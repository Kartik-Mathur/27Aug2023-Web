console.log("Running lib2");
let lib1 = require('./lib1');

let b = 20;
module.exports.b = b;
module.exports.lib1 = lib1;

// module.exports = {
//     b,
//     lib1
// }