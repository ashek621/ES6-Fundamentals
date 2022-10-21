// var i;
// for (i=0;i>15;i++) {

//   console.log('Allah')
// }

// var myCountry=['Dhaka', 'Noakhali', 'Chittagong', 'Barisal', 'Khulna'];

// for (let myCity of myCountry){

//   console.log(myCity);
// }

// var yeasinkazi=['asek kazi', 'tofaha', 'takim', 'arosh', 'shahina'];

// for (let child of yeasinkazi ) {

//   console.log(child);
// }


// var bilgates = {shirt:'Yes', shirtcolor:'offwhite', quality:'good', price:'10usd'}

// console.log(bilgates['quality']);

// var bilgatespro ={
     
//     shirt:{
//        color:'offwhite',
//        quality:'good',
//        price:'10usd'
      
//       },
//     swater:{
//       color:'gray',
//       price:'30usd',
//       fabric:'reshom'
//       },

//       face:{
//         smiling:'Yes',
//         chosma:{
//           color:'black', 
//           frame:'steel'
//         }
//       }

  
//   }

//   console.log(bilgatespro ['face'] ['chosma']['frame']);

// var bilgates = {shirt:'Yes', shirtcolor:'offwhite', quality:'good', price:'10usd'}
 
// for (let props in bilgates){

//   //console.log(bilgates[props]);
//   console.log (props+'='+bilgates[props])

  
// }


// var bilgates = {shirt:'Yes', shirtcolor:'offwhite', quality:'good', price:'10usd'}

// if( bilgates['shirtcolor'] == "red"){

//  console.log("Shirt color is RED");}
 
// else if(bilgates['shirtcolor'] == "blue"){
  
//   console.log("Shirt color is Blue");
// }
 
// else{
//   console.log("Shirt color is Not Found");

// }


// function myName(){
//   var x=7;
//   var y=8;
//   var z=x+y;
//   console.log(z);
// }
//  myName();


// function myName(x,y){
//   var z=x+y;
//   console.log(z);
// }
//  myName(100,99)

// function something(...x) {
//    console.log(x[5]);
// }
// something(1,2,3,4,5,6,67,)

// function MyFunction(){
//   return"Bangladesh";
// }
// console.log(MyFunction());

// function FunOne(){
//   return 20;
// }
// function FunTwo(){
//   return 30;
// }
// console.log(FunTwo() + FunOne());

//Anonymous Function:-


// var myFun = function(){
//   return "Hello";
// }
// var myFun = function(){
//   return 'Hello Again';
// }

// console.log(myFun());


// Arrow Function:-

// var myArrow=()=>{
//   console.log('Bangladesh');
// }
// myArrow();

// var myArrow=(x)=>{
//   console.log(x);
// }
// myArrow(30);

// var myArrow=(...x)=>{
//   console.log(x);
// }
// myArrow(3,0,2,3,45,45,5454,465,4654,);

// Simple Array:-

// var myArray=[1,2,3,4,5,6]

// // console.log(myArray[5]);

// for(let item of myArray) {
//   console.log(item);
// }

// Multidimentional Array:-

// var one=[1,2,3,4,5];
// var two=[11,21,31,41,51];
// var three=[21,24,32,44,55];

// var total=[one,two,three]

// console.log(total);

// var Bangladesh=['dhaka','ctg','noakhali'];
// var india=['dehli','chennai','kolkata'];
// var china=['uhan','shanghai','hongkong'];

// var asia=[Bangladesh, india,china];

// console.log(asia[2][1]);

// Array de-structuring:-

// var countries=['BAN', 'IND', 'PAK']

// var[,a,b]=countries;

// console.log(b,a);


//ES6 Map:-

// var myMap= new Map();

// myMap.set('key1','Bangladesh');
// myMap.set('key2','india');
// myMap.set('key3','pakistan');

// console.log(myMap.values());

// console.log(myMap.keys());

//Loop for Maps values and keys:-

//For values:-
// var myMap= new Map();
// myMap.set('key1','Bangladesh');
// myMap.set('key2','india');
// myMap.set('key3','pakistan');

// for(let myValue of myMap.values()){
//   console.log(myValue);
// }

// //For keys:-

// var myMap= new Map();
// myMap.set('key1','Bangladesh');
// myMap.set('key2','india');
// myMap.set('key3','pakistan');

// for(let myKey of myMap.keys()){
//   console.log(myKey);
// }

// var myMap= new Map();
// myMap.set('key1','Bangladesh');
// myMap.set('key2','india');
// myMap.set('key3','pakistan');

// //myMap.delete('key2')
// //myMap.clear()


// //for(let myValue of myMap.values()){
//  console.log(myMap.get('key3'));
// //}

// if (myMap.has('key1')){
//   console.log('Yes')
// }
// else{
//   console.log('No')
// }

// ES6 Set:-

// var mySet= new Set();

// mySet.add('BAngla')
// mySet.add('english')
// mySet.add('math')
// mySet.add('physics')
// mySet.add('chemistry')
// mySet.add('biology')

// mySet.delete('english');
// mySet.values();
//mySet.size

//console.log(mySet);


// if(mySet.has('BAngla')){
//   console.log('Yes');
// }
// else{
//   console.log('No')
// }

//Creat Class and use:-

// class MyClass{
  
//   MyFun(){
//     console.log('Hello I am a Student');
//   }

//   MyFun1(){
//     console.log('Hello I am a buissmess');
//   }

//   MyFun2(){
//     console.log('Hello I am a Student');
//   }
// }

// var obj= new MyClass();

// obj.MyFun1()

// Class Constuctor:-

// class myClass{

//   constructor(){
//     console.log('Hello i am constructor');
//   }
//  }
//  var obj=new myClass();

// class MyClass{
//   constructor(a,b){
//     console.log(a+b);
//   }
// }

//  new MyClass(10,20)

//Parameterized constructor:-

// class MyClass{
//   constructor(a,b){
   
//     this.firstNum=a;
//     this.secondNum=b;
   
//   }
//   mad(){
//     let result= this.firstNum +this.secondNum;
//     console.log(result);
//   }
// }
//   var obj= new MyClass(10,20);
//   obj.mad()

//Static Keyword:-

// class myClass{
//   hello(){
//     console.log('hello world');
//   }
// }
// var obj=new myClass();
// obj.hello();

// class myClass{
//   static hello(){
//     console.log('hello world');
//   }
// }

// myClass.hello()
   
//Class Inheritance:*-


// class parent{

//     hello(){
//       console.log('Bangladesh');
//     }
//     hello1(){
//       console.log('India');
//     }
//     hello2(){
//       console.log('pakistan');
//     }

// }

// class child extends parent{

//   hello(){
//     console.log('Nepal is our Neighouver');
//   }

//   hello2(){
//     console.log('pakistan is a coulpit country');
//   }
// }

// var obj= new child()
 
// obj.hello1()
// obj.hello()
// obj.hello2()

//Super Keyword:+-

// class parent{
//   hello(){
//     console.log('hi');
//   }
//   hello1(){
//     console.log('bye')
//   }
// }

// class child extends parent{

//   demo(){
//     super.hello()
//     super.hello1()
//   }
// }

// var obj= new child()
// obj.demo()

