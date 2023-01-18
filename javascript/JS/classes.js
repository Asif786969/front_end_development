class Person{
    constructor(name,age,children){
        this.name=name;
        this.age=age;
        this.children=children;

    }
    speak(){
        console.log(`Hi my name is ${this.name} and my age is ${this.age}`)
    }
    birth(child){
        this.children.push(child);

    }
}
const bill=new Person('Bill',50,['mike','sike']);
bill.speak();

