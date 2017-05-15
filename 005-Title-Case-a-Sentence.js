//Title-Case-a-Sentence 
/*
Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.
For the purpose of this exercise, 
you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
  str =str.toLowerCase();
  str =str.split(" ");
  var i=0;
  var character,corChar,corStat;
  var result=[];
  while (i<str.length) {
    character = str[i].charAt(0);
    corChar   = str[i].charAt(0).toUpperCase();
    corStat   = str[i].replace(character,corChar);
    result.push(corStat);
    i++;
  }
  result = result.join(" ");
  return result;
}

titleCase("I'm a little tea pot");
