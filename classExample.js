/* Create a time variable and set it to 0
Create a gravity variable and set it to 0.5
Extend the particle class from earlier with a prototype object.
Create a prototype object that contains:
A property of getVelocity() that returns the value (time * gravity)
A property of move()
move() should add the value from getVelocity() to the existing y position
If and when y >= 500 move() should instead do the following: console.log('bottom')
use your existing array and for loop to create a particles array
Use setInterval at 100ms to
increment the global time variable by 1
console.log all the particle's x values
also return an array with all of the y values that are less than 500 (y < 500)
take the array with y values
call the move() function on EACH item*/

/*function Particle(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.velocity = {x: 0, y: 0};
    }
    
    /*
    class Particle {
    constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.velocity = {x: 0, y: 0};
    }
    }
    */
/*    
    var particles = [];
    for(var i = 0; i < 100; i++) {
    particles.push(new Particle(i, Math.random() * 500));
    }

const time = 0;
const gravity = .5;
*/

const profile = {name: "Prentice Bess", 
                address: "123 Main Street", 
                city: "Charlotte", 
                state:"North Carolina", 
                zipcode: "28277", 
                avatar: "Baseball"    
        }

        function getprofileUpdate() {
            return ({name: “Lawrence Taylor”, avatar: “football”})
         }
         
         function updateProfile(profile2) {
            const newProf = Object.assign({}, profile2, getprofileUpdate());
            console.log(newProf);
         }
         updateProfile(profile);