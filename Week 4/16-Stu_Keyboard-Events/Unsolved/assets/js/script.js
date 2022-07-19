function keydownAction(event) {
  event.preventDefault();
  // TODO: Complete keydown function
  document.querySelector("#status").innerHTML = "KEYDOWN Event";
  document.querySelector("#key").textContent = event.key;
  document.querySelector("#code").textContent = event.code;
}

function keyupAction(event) {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}


// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);

document.addEventListener("keyup", keyupAction);
