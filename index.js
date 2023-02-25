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


