var myName: string = "Aravind";
var myAge: number =41;
var can: boolean = true;
var any: number= 1;
//any = "asd";

//document.getElementById("tsStuff").innerHTML = "My Name is" + myName ;
function greet(pram: string){
    return "Hello" + pram;
}

var user = "aravind"
 console.log(greet(user))

 document.write("My nam eis as" + typeof(myName)+ "<br />")

 var strToNum: number = parseInt("6");
 var numToStr:number = 5;
 document.write("num to string "+ typeof(numToStr.toString())+"<br />")

 const PI = 3.14;

 interface superhero{
     realName: String;
     superName: String;
 }

 var superman : superhero={
     realName:"clark kent",
     superName:"Super man"
 }

 document.write(superman.superName + "more to come "+ superman.realName+ "<br />")

 var employess: string[] = ["bb","cc","dd"]

 employess.push("44");

 var suppp: superhero[] =[];
 suppp.push({
    realName:"",superName:""
 });

 let sampleLet = 123;
 var varSmaple = 123;
 //let sampleLet= 456;
 if(true){
     let sampleLet= 456;
     var varSmaple = 5565;
 }
 document.write(sampleLet +"<br />")
 document.write(varSmaple +"<br />")

 var getSum = function( num1 : number, num2:number): number{
     return num1+num2;
 }
 var tthesum1: number = getSum(5,3);
 document.write("5+2 ="+ tthesum1 +"<br />")

 var getDiff = function(num1: number, num2=2, num3?: number):number{
     if(typeof num3 !== 'undefined'){
         return num1-num2-num3;
     }
     return num1-num2;
 }
 //var theDiff = getDiff()

 document.write("5-2-4"+ getDiff(5) +"<br />");
 document.write("5-2-4"+ getDiff(5,2,3) +"<br />")


 var sumAll = function(...nums: number[]):void{
    var sum = nums.reduce((a,b)=> a+b,0);
    document.write("sum:"+ sum +"<br />");
 }
 sumAll(1,2,3,4,5);

 var addOne = (x: number)=> x+1;
 document.write("add oe"+addOne(1) +"<br />")

 class Animal{
     public favFood:string;

     static numOfAnimals: number =0;

     constructor(private name: string, private owner: string){
         Animal.numOfAnimals++;
     }

     ownerInfo(){
        document.write(this.name+ " is owned by " + this.owner  +"<br />")
     }

     static howManyAnimals():number{
         return Animal.numOfAnimals;
     }

     private _weight:number;
     get weight():number{
         return this._weight;
     }

     set weight(weight:number){
         this._weight = weight;
     }
 }

 var spot=  new Animal("spot","hfhgf");
 spot.ownerInfo();
 spot.weight=100;

 document.write(" spot weight is "+ spot.weight +"<br />")
 document.write("num of  animals "+ Animal.howManyAnimals() +"<br />")

 class Dog extends Animal{
     constructor(name: string, owner: string){
         super(name,owner);
         Dog.numOfAnimals++;
     }
 }

 var grover =  new Dog("grover", "tommy");
 document.write("num of  animals "+ Animal.howManyAnimals() +"<br />");
 document.write("is a Dog an Animal: "+  (grover instanceof Animal) +"<br />");
 document.write("Does the gorver ob has name : "+ ('name' in grover) +"<br />")


 interface Vehicle{
     drive(): any;
 }

 class Car implements Vehicle{
     constructor(private wheels: number){}
     drive():void{
        document.write("The car drives with"+ this.wheels +" wheeks" +"<br />")
     }
 }
 class Bicycle implements Vehicle{
    constructor(private wheels: number){}
    drive():void{
       document.write("The BiCylce drives with"+ this.wheels +" wheeks" +"<br />")
    }
}

var car = new Car(4);
var bike = new Bicycle(2);

car.drive();
bike.drive();

