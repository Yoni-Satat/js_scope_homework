// Episode 1

var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName(); // My name is Keith
// first a variable name is created globaly and get assigned to 'Keith'
// the function printName log into the console the string 'My name is '
// plus the value of the variable name.

// ================================================================== //

//Episode 2

score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result()); // 3
// first a variable score is created and assigned with the value of 5.
// the function result re-assign the score to number 3 and return the new score value.

// ================================================================== //


// Episode 3

var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals(); // 0. Ducks, 1. Dogs, 2. Lions
// function listAnimals re-assign myAnimal with different animals in the array
// it loops through the array
// and print the index and the value for each element in the array.

// ================================================================== //

// Episode 4

var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );

// allSuspects will print: Suspects include: Jay, Val, Harvey, Rick
// suspectThree was re-assigned to Harvey inside the function.

// console.log will return Suspect three is:Keith
// console.log get executed outside the function
// it print Keith and not Harvey cause the Keith is the value in global scope.

// ================================================================== //

// Episode 5

var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());

// var detective is an object with name and pet.
// printName function returns the name of the detective.
// detectiveInfo re-assign the detective name from Ace Ventura to Poirot
// it then return invoke the printName function and return the detective printName
// console.log will print Poirot as its been changed inside detectiveInfo function.
