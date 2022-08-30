// Helper function to evaluate if a number is within a given range
const inRange = (x, min, max) => (x - min) * (x - max) <= 0;

function Student(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;

  // Method that will simulate method overloading in JavaScript
  this.displayGrade = function (grade) {
    const input = grade;
    if (!input) {
      throw new Error('no grade provided');
    }
    if (typeof input === 'number') {
      if (input >= 90) {
        return "A";
      } else if (input >= 80 < 90) {
          return "B";
          ;
      } else {
          return null;
      }
    }
    if (typeof input === 'string') {
      if (input == 'A') {
        return ">= 90"
      } else if (input == 'B') {
        return "80-89"
      } else {
        return null;
      }
    }
  }
  };


const John = new Student('John', 'Appleseed', '30');
console.log('John.displayGrade():', John.displayGrade(95));
console.log('John.displayGrade():', John.displayGrade('B'));
