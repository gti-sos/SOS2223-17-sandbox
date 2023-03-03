
var express = require("express");
var cool = require("cool-ascii-faces");

var app = express();
var port = 12345;

app.get("/faces", (request,response)=>{ //response, la resp que queiro dar a una petición que llega
    response.send(cool());//esto es lo que mando al navegador
    console.log("New request")
});

app.listen(port, ()=>{
    console.log(`Server ready in port ${port}`);
});//funcion asincrona, con el 2º param me aseguro escucha cuando el servidor esta preparado

//var algo = console.log("Hello world !");

function log(msg){
    console.log(msg);
}

log("Mi fantastico log");

var numbers = [1,2,3,4,5]

// for(var i = 0; i<numbers.length; i++){
//     log(numbers[i]);
// }

var i = numbers
            .filter((n)=>{
            return n>2;
            }).map((n)=>{
                return n+1;
            }).reduce((a,n)=>{
            return a+n;
});

log(i);
