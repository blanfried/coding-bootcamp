// console.log(process.argv);

const a = process.argv[2]
const b = process.argv[3]

sameVar = function() {
      if (a === b) {
            return'true';
      }
      else {
            return 'false';
      }
}

console.log(sameVar())