/*var landscape = function() {
    var result = '';
 
    var flat=  function(size) {
        for (var count=0; count<size; count++)
        result += " _ ";
    };
    var mountain = function(size){
        result += "'";
        result += "//";
    };
 
    flat(3);
    mountain(4);
    flat(6);
    mountain(1);
    flat(1);
    return result;
 }
 
 console.log(landscape());*/

/* var name = 'Jack;
 var greet = function(){
     var name = 'Rose'
     console.log(name);
 }
 console.log(name); //Jack
 console.log(greet(name)); //Rose*/

//Start with the following code template. After each step, run the program and see how the output changes.

/*function outer(){
    var a = 'Joey';
    var b = {name: 'Doughnuts'};
    console.log(a,b);
  
    function inne(a, b) {
    console.log (a, b);     
    a = 'Don';
    b = {name: 'Juan'};
    console.log(a,b);
    b.name ='Superman'
}
  
    inner(a,b);
    console.log(a,b);
  }
  
  outer();*/
  
     // 1.Declare two variables, a and b in the outer function's scope and set them to a string and an object respectively. Log their values immediately.
      
     // 2.Log the values of a and b in the inner function.
      
      // 3.Update the inner function to take two parameters named a and b.
      
      // 4.Pass a and b in as arguments when you execute inner().
      
      // 5.Inside the inner function, assign new values to a and b and log them at the end of the function AND after the execution of inner(a,b).
      
      // 6.Inside the inner function, update a property of the b object.
   /* }
}
playRound (player1, player2);*/

/*function createFunction(){
    var a = "Hans Zimmer Rules!";
    inceptiion = function(){
        console.log(a);
    }
}
var inception;
createFunction();
inception(); //"Hans Zimmer Rulers!"

const teacher ={
    name; 'Jimmy',
    sayName: function(){
        console.log(this.name);
    
    }
}
teacher.sayName(); //'Jimmy'*/

var slideshow ={  
    photoList: ['Evan', 'Fah', 'Kyle', 'Pravin', 'Dimitri'],
    currentPhotoIndex: 0, 
    nextPhoto: function(){ 
        for(this.currentPhotoIndex=0; this.currentPhotoIndex < this.photoList.Length; this.currentPhotoIndex++);
        {
        console.log(this.photoList[this.currentPhotoIndex].toString());
    }
    console.log(('End of Slide'));
},
    prevPhoto: function(){
        for(this.currentPhotoIndex = this.photoList.length; this.currentPhotoIndex >0; this.currentPhotoIndex--){
            console.log(this.photoList[this.currentPhotoIndex-1].toString());
        }
        console.log(('End of Slide'));
    },
    getCurrentPhoto:function(){
        console.log(this.photoList[this.currentPhotoIndex]);
    }     
}
//slideshow.nextPhoto();
slideshow.prevPhoto();
//slideshow.getCurrentPhoto();    

