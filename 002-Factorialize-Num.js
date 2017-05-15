//Second algorithm
//Factorialize a Number

function factorialize(num) {
  var sum = 1;
  for(var i=num;i>0;i--){
    sum *= i;
  }
  return sum;
}

factorialize(5);
