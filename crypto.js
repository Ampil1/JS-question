var CryptoJS = require("crypto-js");

// Encrypt
const secretKey='ndedsscdwewe'
var ciphertext = CryptoJS.AES.encrypt('my message', secretKey).toString();
 console.log("cheeeee",ciphertext)
// Decrypt
var bytes  = CryptoJS.AES.decrypt(ciphertext, secretKey);
console.log("byte",bytes)
var originalText = bytes.toString(CryptoJS.enc.Utf8);

console.log(originalText); // 'my message'