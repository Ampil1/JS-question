const crypto = require('crypto'); 
  
function  encrypt4  (text){

    algorithm = 'aes-192-cbc';
    const slat = 'bncaskdbvasbvlaslslasfhj';

    const key = crypto.scryptSync(slat, text, 24);

    const iv = Buffer.alloc(16, 0); 
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = '';
    cipher.on('readable', () => {
    let chunk;
    while (null !== (chunk = cipher.read())) {
      encrypted += chunk.toString('base64');
    }
    });
    cipher.on('end', () => {
    console.log(encrypted);
    });
    cipher.write('CS-Portal');
    cipher.end();
    console.log("encrypted",encrypted);
    console.log("iv-----",iv);
    console.log("done");
    return {
        iv: iv,
        content: encrypted
    };
}
var input = encrypt4("hello");
function decrypt(text) { 
  
    let iv = Buffer.from(text.iv, 'hex'); 
    let encryptedText = 
       Buffer.from(text.encryptedData, 'hex'); 
     
    // Creating Decipher 
    let decipher = crypto.createDecipheriv( 
           'aes-256-cbc', Buffer.from(key), iv); 
     
    // Updating encrypted text 
    let decrypted = decipher.update(encryptedText); 
    decrypted = Buffer.concat([decrypted, decipher.final()]); 
     
    // returns data after decryption
    console.log("decrpted",decrypted.toString()) 
    return decrypted.toString(); 
   } 
   var output = decrypt('Q1ZdkbwlYB8+C7Z0brPRNA==')
   console.log("input---",input);
   console.log("output",output)