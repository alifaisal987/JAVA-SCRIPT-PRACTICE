// console.log("hello javascript");
// var username = 'ali';
// console.log(username);

// alert ('ali');

// console.log(2+2);

// var num1 = 2+2;
// var num2 =4+4;

// console.log(num1+num2);

// var city='karachi';  //declaration
// console.log(city);
// var city='lahore';   //redeclaration
// console.log(city);
// city ='islamabad';  //reassign
// console.log(city);



// weight =30;
// console.log(weight+25);

// data types in javascript
// string 
// number 
// boolean

// 2nd class started

//assignment operators started
// var num1 =20;
// num1 +=5;
// console.log(num1)

// var num1 =20;
// num1 -=5;
// console.log(num1)

// var num1 =20;
// num1 /=5;
// console.log(num1)

// var num1 =20;
// num1 *=5;
// console.log(num1)
//assignment operators ended

//comparasion operator started
// console.log(20>20);
// console.log(20>=20);

// console.log(20=="20");    //data type check nahi karega
// console.log(20 !="20");   //data type check nahi karega


// console.log(20 ==="20")  //data type check karega
// console.log(20 !== "20") //data type check karega

// console.log(20<20); 
// console.log(20<=20)

// var num1=10;
// var num2=20;
// var comparasion= 10 != '20';
// console.log(comparasion)
//comparasion operator ended

// prompt('Enter your full name');

// percentage calculator

var totalMarks=400;
var phyMarks= +prompt("Enter Physics Marks");
console.log(phyMarks);

var engMarks= +prompt("Enter english Marks");
console.log(engMarks);

var chemMarks= +prompt("Enter chemistry Marks");
console.log(chemMarks);

var urduMarks= +prompt("Enter urdu Marks");
console.log(urduMarks);

var obtainedMarks = engMarks + phyMarks + chemMarks + urduMarks;
console.log("total obatained marks are>>"+obtainedMarks+"marks");

var percentage = obtainedMarks / totalMarks*100;
console.log("your percentage is>>" +percentage + %);


