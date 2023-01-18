function say(string){
    console.log(string);
}

function add(a,b,c){
    return a+b+c;
}
console.log(add(4,4,4));
//IN JS YOU CAN USE FUNCTION BEFORE DECLARING IT IT CALLED HOISING HENCE YOU CAN DECLARE ALL 
// ALL THE FUNCTIONS AT THE TOP.


//arguments
function add(){
    let sum=0;
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i];

    }
    return sum;
}
console.log(add(3,4,5,5,5));

for(let i=9;i>0;i--){

}






