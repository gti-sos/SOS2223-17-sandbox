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

