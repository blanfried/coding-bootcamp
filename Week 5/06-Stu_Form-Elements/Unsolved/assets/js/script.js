var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
const handleForm = (event) => {
      event.preventDefault();
      var inputValue = $('input[name="shopping-input"]').val();
      console.log(inputValue);
      var li = $('<li>');
      li.text(inputValue);
      shoppingListEl.append(li);
      $('input[name="shopping-input"]').val("");
}


// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on("submit", handleForm)