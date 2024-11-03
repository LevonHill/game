const readline = require('readline');
// Create an interface for user input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Promisify the question method for cleaner async/await use
const askQuestion = (query) => new Promise((resolve) => rl.question(query, resolve));

// Use async/await for cleaner flow
const getUserInput = async () => {
    try {
        const answer = await askQuestion('Enter a number: ');
        const num = parseInt(answer, 10);

        if (isNaN(num)) {
            console.log('That is not a valid number.');
        } else {
            console.log(`The number you entered is: ${num}`);
            // Your logic to test code can be placed here
        }
    } finally {
        // Close the readline interface
        rl.close();
    }
};

getUserInput();
//checkSpeed(70);
 //       function checkSpeed(speed) {
 //       const speedLimit = 70;
  //      const kmPerPoint = 5;
  //      if(speed < speedLimit + kmPerPoint){
   //     console.log('ok');
  //      return;
    //    }
   //      const points = Math.floor ((speed -speedLimit) / kmPerPoint); 
    //    if (points >=12)
    //    console.log('License Suspended');
     //   else 
    //    console.log('points', points);
     //   }

let practice = [1,2 ,3 ,4,5 ,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
for (let i = 0; i <practice.length; i++){
    if (practice[i] % 2 == 0)
        console.log(practice [i] +  ' Even Numbers will be listed Only');
    console.log( practice);
} 
function createCircle(radius){  // factory function which is a function that reproduces objects
    return{ // returns the value of the factory functions body
        radius, // non hardcoded , the key value is fine intialized with just its key name
        draw(){ // draw is the function method of the creatCircle function
            console.log('draw'); // This call logs the draw functions output
        }
    };
}
const deliMeat = ['Bologna', 'Ham', 'pepperoni','Hardsalami'];
console.log(deliMeat);
const circle1 = createCircle(1); // an object created from a call to the factory function createCirle 
console.log(circle1);
const circle2 = createCircle(2);
console.log(circle2);


// constructor function , is the same in theory as factory function its role is to create an object   
function Circle(radius){ // constuctor function
    this.radius = radius; // this is  REFERENCE TO THE OBJECT THAt references this piece of code ,it represents an empty object
    this.draw = function(){
        console.log('draw');
    }
}
const Circle = new Circle(1); //this creates an empty object defined const that uses circle function contrcutor fucntion called Circle
//const x = {}; this is whats happening under the hood of the above statement, this staements point to the new empty obj

