//Third Algorithm
//Check for Palindromes

function palindrome(str) {  
  var a = str.toLowerCase();
  a = a.replace(/[^a-z]/g, "");
  a = a.split('');
  a.reverse();
  a = a.join('');
  
  var b = str.toLowerCase();
  b = b.replace(/[^a-z1-9]/g, "");
  b = b.split('');
  b=b.join('');
  
  return (a===b);
 }


palindrome("1 eye for of 1 eye.");
