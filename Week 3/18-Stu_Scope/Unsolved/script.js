// TODO: Declare variable 'shout' with the value 'Shout' so it's available to `justShout` and `shoutItAllOut` functions
var shout = "shout";

function justShout() {
  console.log(shout + ", " + shout);
  return;
}

function shoutItAllOut() {
  console.log(shout + " it all out! ");
  return;
}

justShout();
shoutItAllOut();

// TODO: Declare variable 'animal' with the value 'Tigers' so it is only available to the 'sayTigers' function
function sayLions() {
  let animal = "Lions"; 
  console.log(animal);
  return;
}

function sayTigers() {
  let animal = "Tigers"
  console.log("and " + animal + " and "); 
  return;
}

// TODO: The variable 'bears' should only declared once and 'sayBears' should return "Bears! OH MY!". 
var bears = "Bears";

function sayBears() {
    var bears = "Baers";
    console.log(bears + "! OH MY!");
    return;
}

sayLions();
sayTigers();
sayBears();

// TODO: The variable 'sing' should be declared once in the local scope.
var sing = "Sing"; 

function singAlong() {
  console.log(sing + ",");
  return;
}
  function singASong() {
    console.log(sing + " a Song.");
    return;
  };

  singAlong();
  singASong();

