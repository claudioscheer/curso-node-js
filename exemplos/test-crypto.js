console.time('crypto pbkdf2');
const crypto = require('crypto');

let i = 0;
const n = 6;
for (i = 0; i < n; i++) {
  crypto.pbkdf2('password', 'salt', 20000, 512, 'sha512', end);
}

function end(error, derivedKey) {
  if (--i === 1) {
    console.log(i)
    console.timeEnd('crypto pbkdf2');
  }
}

// console.time('crypto pbkdf2');
// const crypto = require('crypto');

// let i = 0;
// const n = 10;
// for (i = 0; i < n; i++) {
//   crypto.pbkdf2Sync('password', 'salt', 20000, 512, 'sha512');
// }
// console.timeEnd('crypto pbkdf2');