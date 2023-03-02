//write two small servers (either http or tcp/udp), the first should take any javascript code entered from the command line and send it to the second, which should execute it. You can !not! use eval() or new Function().

// var Server  = require("socket.io");
// const io = new Server(3000);
// io = new Server(restify.httpServer);
// io = new Server()
var http=require('http');
const readline = require('readline');
var app = http.createServer();
app.listen(400,function(req,req){

    console.log(`you app running on port:4000`)
})


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What is your name ? ', function (name) {
    rl.question('Where do you live ? ', function (country) {
      console.log(`${name}, is a citizen of ${country}`);
      rl.close();
    });
  });
// rl.on('close', function () {
//   console.log('\nBYE BYE !!!');
//   process.exit(0);
// });





// io.on("connection", (socket) => {
//   // send a message to the client
  
//   socket.emit("hello from server", 1, "2", { 3: Buffer.from([4]) });

//   // receive a message from the client
//   socket.on("hello from client", (...args) => {
//     // ...
//   });
// });