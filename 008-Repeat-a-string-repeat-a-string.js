//Repeat a string repeat a string

/*Repeat a given string (first argument) num times (second argument).
Return an empty string if num is not a positive number.*/

function repeatStringNumTimes(str, num) {
  var x=[];
  if (num>=0){
    for(var i=0;i<num;i++)
      {
        x.push(str);
      }
  }
  else {return "";}
  x=x.join('');
  return x;
}

repeatStringNumTimes("abc", 3);
