function clouser(){
    var result =[];
    for(let i=0;i<5;i++){
        result[i] = function () {
            return i;
        }
    }
}
console.log(result[0]())
clouser()