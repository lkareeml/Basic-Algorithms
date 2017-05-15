//Find the Longest Word in a String 
//Return the length of the longest word in the provided sentence.
//Your response should be a number.

function findLongestWord(str) {
  var a= str.split(" ");
  var max=0;
  var x;
  var i=0;
  while (i<a.length)
  {
    x = a[i].length;
    if (x>max) 
      max=x;
    i++;
  }
  return max;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
