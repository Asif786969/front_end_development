let price=9.99
let tax=10;
let amount=12.3e7;
let second_amount=12.3e-5;
console.log(amount);
console.log(second_amount);
//Everyday decimal errors

let a=0.1;
let b=0.2;
let d=1e10;
console.log(a+b);
console.log((a*d+b*d)/d);
console.log(parseFloat(a+b).toPrecision(4));
//big int stores any value greater than 2^53-1
let biging=10201021n;//it has n at the end
//also numbers can be written like
const maximum =9_111_112_121;


//BINARY
let f=0b111;
console.log(f);

//OCTAL 
let oct=0o124;
console.log(oct);


