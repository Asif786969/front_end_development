const number=[1,2,3,4,5];
const newnum=[...number,4];
console.log(newnum);
const filter=(...args)=>{
    return args.filter(el=>el===1);
}
console.log(filter(1,2,3));
