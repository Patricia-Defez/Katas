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



  //Extract the domain name from a URL 08/10/2019
  function domainName(url){
    url = url.replace('http://','').replace('https://','').replace('www.','').split('.')
    return url[0]
  }

  // with RegExp
  function domainName(url){
    return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
  }



  //Find the middle element 04/11/2019
  var gimme = function (inputArray) {
    if(inputArray[0] > inputArray[1] && inputArray[0] > inputArray[2]){
     return inputArray[1] > inputArray[2] ? 1 : 2;
    }else if (inputArray[0] < inputArray[1] && inputArray[0] < inputArray[2]){
      return inputArray[1] < inputArray[2] ? 1 : 2;
    }else{
      return 0;
    }
   };

   //best
   function gimme(a) {
    return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
  }

  var gimme = function (inputArray) {
    return inputArray.indexOf(inputArray.slice(0).sort(function(a,b) { return a-b; })[1]);
  };
  
  //The Coupon Code
  function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate)
  }

  //Highest and Lowest
  function highAndLow(numbers){
    numbers = numbers.split(" ").sort((a,b)=>b-a)
    return numbers[0] + " "+ numbers[numbers.length -1];
  }
  
  function highAndLow(numbers) {
    var arr = numbers.split(" ");
    return Math.max.apply(null, arr) + ' ' + Math.min.apply(null, arr);
  }

  function highAndLow(numbers){
    let arr = numbers.split(' ').map(Number);  
    return Math.max(...arr) + ' ' + Math.min(...arr);
  
  }

  //Remove the minimum

    //altera el array original
  function removeSmallest(numbers) {
    var i = numbers.indexOf(Math.min.apply(null, numbers));  
      i !== -1 && numbers.splice(i, 1);
      return numbers;
    } 

    //no lo altera pero elimina todos
  function removeSmallest(numbers) {
    var i = numbers.indexOf(Math.min.apply(null, numbers));  
      if (i !== -1){
        return numbers.filter(e => e !== numbers[i]);
      }
    return numbers;
  }

  function removeSmallest(numbers) {
    var i = numbers.indexOf(Math.min.apply(null, numbers));  
      if( i !== -1 ){
        return numbers.slice(0,i).concat(numbers.slice(i+1,numbers.length));
      }
    return numbers;
  }


  function removeSmallest(numbers) {
    var i = numbers.indexOf(Math.min.apply(null, numbers));  
     if( i !== -1 ){
        return [...numbers.slice(0,i),...numbers.slice(i+1,numbers.length)];
      }
    return numbers;
  }