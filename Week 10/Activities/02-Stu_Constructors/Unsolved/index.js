// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'
// TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech
function Developer(name, tech) {
      this.name = name;
      this.tech = tech;
      this.introduction = () => {
        if (this.name !== undefined) {
          console.log("Hi! my name is " + this.name + ", my favourite tech is " + this.tech + ".");
        }
      };
    }


// TODO: Create a new object using the 'Developer' constructor
const steve = new Developer("Steve", "Apple");
const tony = new Developer("Tony", "Alexa");

// TODO: Call the 'introduction()' method on the new object
steve.introduction();
tony.introduction();
