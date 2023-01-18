const names=['Bill','Mike','Asif']
const morenames=['William','Paul']
console.log(...names);

//req-> names+"abdil"+morenames
const allnames=[...names,'abdil',...morenames]
console.log(...allnames);