//Truncate a string
/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.
*/

function truncateString(str, num) {
  var x;
  if(num<str.length){
    if(num<=3)
    x = str.slice(0,num)+"...";
    else
    x=str.slice(0,num-3)+"...";
  }
  else x=str;
  return  x;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
