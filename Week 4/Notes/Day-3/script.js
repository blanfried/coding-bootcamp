

const max = (num) => {
      var maxNumber = 0
for (let i = 0; i < num.length; i++) {
      if (maxNumber < num[i])
      maxNumber = num[i]
      
}
console.log(maxNumber);
  }

  max([1,2,4,0,8]);