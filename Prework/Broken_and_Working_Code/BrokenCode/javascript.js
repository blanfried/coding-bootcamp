// When the factButton is clicked...
document.getElementById("#factButton").on("click", function() {
	// We generate a random number between 0 and 4 (the number of facts in the catFactArray)
	var number = Math.floor((Math.random() * booFactArray.length));
	// We display the fact from the catFactArray that is in the random position we just generated.
	document.getElementById("#factText").text(booFactArray[number])
})

// This array holds all of our Grumpy Cat facts!
var booFactArray = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16, making him a Pisces", "Boo's favourite food is grass, Boo has released two books"]

$("#textPink").on("click", function() {
	$("#funText").css("color", "pink")
})

$("#textOrange").on("click", function() {
$("#funText").css("color", "orange")
})
$("#textGreen").on("click", function() {
	$("#funText").css("color", "green")
})


$("#boxGrow").on(click, function() {
	$("#box").animate({height:"+=35px", 
		width:"+=35px"}, "fast");
})

$("#boxShrink").on(click, function() {
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})