const { strictEqual } = require('assert');
var expres = require('express');
   var app= expres()
   app.get('/',function(req, res){

    return "hellow world"
})

function reverString(){

    let str= 'hello how are you'
    //op=>0lleh woh ear uoy
    return str.split('').reverse().join('');
}
console.log(reverString())