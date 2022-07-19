var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;
}


function incrementCounter(){
  count += 1;
  setCounterText();
};

function decrementCounter(){
  count -= 1;
  setCounterText();
};

function decrementCounter (){
  if (count > 0)
  count--;
  setCounterText();
}



// TODO: Add event listener to increment button
incrementEl.addEventListener("click", incrementCounter) 


// TODO: Add event listener to decrement button 
decrementEl.addEventListener("click", decrementCounter)


