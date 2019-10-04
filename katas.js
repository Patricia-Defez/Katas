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