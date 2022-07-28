- Jquery Cheatsheet

$("#id") //get element by id
$("h1") //select all h1 tags
$("<h1>") // create a h1 element
root.append();
root.text();
root.attr();
root.css({background-color: red, color: white});
root.css(color, red);

// add eventListener to the form
// submit event
// event.preventDefault

root.on("click", handleElement);
root.click(handleElement);

root.children().eq(1).css("color", "red").attr("key", "value") [0]
