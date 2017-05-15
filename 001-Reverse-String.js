//The first Algogithm
//Reverse String function

function reverseString(str) {
  var arr = str.split('');
  arr.reverse();
  str = arr.join('');
  return str;
}

reverseString("hello");
