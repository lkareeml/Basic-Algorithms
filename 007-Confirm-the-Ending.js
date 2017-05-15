//Confirm the Ending

/*
Check if a string (first argument, str) ends with the given target string (second argument, target).
This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/

function confirmEnding(str, target) {
  var x = str.length;
  var y = target.length;
  var a = str.substr(x-y,y);
  if(a==target){return true;}
  else return false;
  var b = str.substring(x-y,x);
  if(a==target){return true;}
  else return false;
  return a;
}

confirmEnding("Bastian", "n");
