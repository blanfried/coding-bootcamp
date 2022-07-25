var gameBtn = document.querySelector('#gameBtn');

gameBtn.addEventListener("click", generateResponse);


function generateResponse() {

      let RPS = ['R', 'P', 'S']
      let selected_options = []
   
      do {
        length = prompt("Choose R for Rock, P for Paper, or S fo Scissors");
      } while (selected_options === 0)



      for (i = 0; i < RPS.length; i++) {
            el = selected_options[Math.floor(Math.random()*selected_options.length)];
            if (el == 0) {
                  // select random lowercase
                  current_char = lowercase[Math.floor(Math.random()*lowercase.length)];
            } else if (el == 1) {
                  // select random uppercase
                  current_char = uppercase[Math.floor(Math.random()*uppercase.length)];
            }
        }

}