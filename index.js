/*
class Height {
   constructor(height){
       this.height = height;
   }
}
var test = new Height(5);
console.log(test.height);
*/

/*
class Height {
    static h = "5";
}
console.log(Height.h);
*/

/*
class Shape {
    constructor(a) {
        this.area = a;
    }
}
class Circle extends Shape {
    display() {
        console.log("Area: ",this.area);
    }
}
class Square extends Shape {
    display() {
        console.log("Area: ",this.area);
    }
}
var testArea = new Circle(225);
console.log(testArea);
var testArea2 = new Square(9000);
console.log(testArea2);
*/

/*
class Parent {
    logger () {
        console.log("Calling from Parent");
    }
}
class Child extends Parent{
    logger () {
        super.logger();
        console.log("Calling from Child");
    }
}
var instance = new Child();
console.log(instance.logger());
*/

/*
class Parent {
    logger () {
        console.log("Calling from Parent");
    }
}
class Child extends Parent{
    logger () {
        super.logger();
        console.log("Calling from Child");
    }
}
var a = new Child();
console.log(a.logger());
*/


/*
var data = {
    name: "hamza",
    class: "module B"
};
var abc = JSON.stringify(data);
localStorage.setItem("myData", abc);
var response = localStorage.getItem("myData");
console.log("Response: ",JSON.parse(response));
var format = JSON.parse(response);
console.log(format.name);
*/
// localStorage.removeItem("myData");