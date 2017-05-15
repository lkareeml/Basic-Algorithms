//Mutations 

/*Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".*/


function mutation(arr) {
  
  //all to LowerCase
  var x=[];
  for(var i=0;i<arr.length;i++){x.push(arr[i].toLowerCase());}
  arr=x;
  var arr0 = arr[0].split('');
  var arr1 = arr[1].split('');
  //arr0==>["h","e","l","l","e"]
  //arr1==>["h","e","y"]
  //********************//
  var count=0;
 for(var j=0;j<arr1.length;j++){
    if(arr0.indexOf(arr1[j]) != -1 ) {count+=1;}
  }
  if(count == arr1.length)
    return true;
  else
    return false;
}
mutation(["hello", "hey"]);
