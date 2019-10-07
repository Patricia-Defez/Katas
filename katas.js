//Find the capitals 03/10/2019

var capitals = function (word) {
	
  let result = [];
  for (let i = 0; i < word.length; i++){
    let letter = word.charAt(i);
    if(letter === letter.toUpperCase()){
    result.push(i)};
  }
  return result
};

//Best:
var capitals = function (word) {
    return word.split('').reduce(function(memo, v, i) {
      return v === v.toUpperCase() ? memo.concat(i) : memo;
    }, []);
  };

 //Sum of the first nth term of Series 07/10/2019
 function SeriesSum(n){
  if(n === 0) {
    return "0.00"
  } else {
    let div = -2;
    let result = 0; 
    for (let i = 0; i < n; i++){
    div += 3
    result = result + (1 / (div))   
    }
    return result.toFixed(2).toString()
   }
  }

  //Best
  function SeriesSum(n) {
    for (var s = 0, i = 0; i < n; i++) {
      s += 1 / (1 + i * 3)
    }  
    return s.toFixed(2)
  }