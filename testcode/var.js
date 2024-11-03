//function hoistingExample1() {
   // console.log(x); // undefined and gets hoisted
    //var x = 5;// is not hoisted
    //console.log(x); // 5
//}


//hoistingExample();
//function hoistingExample2() {
   // let x= 5;
    //console.log(x); // gets hoisted
    
//}


//hoistingExample2();

function scopeExample() {
    if (true) {
        var y = 10; // y is function-scoped
    }
    console.log(y); // 10
}
scopeExample();

var z = 1;
var z = 2; // No error, z is re-declared
console.log(z); // 2

var globalVar = "I'm global!";

function testGlobal() {
    var localVar = "I'm local!";
    console.log(globalVar); // I'm global!
}

testGlobal();
console.log(localVar); // ReferenceError: localVar is not defined

var numbers = [1, 2, 3];
var results = [];

for (var i = 0; i < numbers.length; i++) {
    setTimeout(function() {
        results.push(numbers[i]); // Pushes undefined
    }, 100);
}

console.log(results); // []
