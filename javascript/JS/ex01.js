console.time('');
let a=Array(10000000);
let si=0;
// for(const item of a){
//     si+=item;
// }
for(let i=0;i<a.length;i++){
    si+=i;
}
console.timeEnd('');
//TYPES
let first=null;//NULL TYPES

let second=12;//NUMBER
let third=12.4;

let ap=NaN;//Nan type(Not a number)

let str='Java';

let boolean=true;

//SYMBOL
let s1=Symbol();
console.log(Symbol()==Symbol());

//OBJECT
let person={
    first:'Mohammad',last:'Asif'
};
console.log(person.first);
