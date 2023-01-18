const ages=[12,42,131,1,42,5,14]
// const adults=ages.filter(function(age){
//     return age>20;
// });
const adults=ages.filter((age)=>(age>20));
console.log(adults);
//TEMPLATE STRINGS
const name="Asif"
const sentence="My name is "+name+" , and I am in good health";
console.log(sentence)
const sentence2=`My name is ${name} and I am in good health.`;
console.log(sentence2)


//PROTOTYPE METHODS
function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.speak=function(){
    console.log(`Hi my name is ${this.name}`);
}
const bill=new Person('Bill',23);
bill.speak();
















