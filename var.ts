let a:number=90;
let b:number=0x37CF;
let c:number=0b1100
let d:number=90.8;


console.log(a);
console.log(b);
console.log(c);
console.log(d);

//string decl

//a='hi';
//console.log(a); -- error

let str:string='hello'
console.log(str);

let boo:Boolean=true;
console.log(boo);


//void declaration

let e:void=undefined;

//e=null;
//e=120; // error
console.log(e);


//any decl
//var vs object vs any

let f:any='string';
f=89;
f=90.8;
f=true;
console.log(f);


