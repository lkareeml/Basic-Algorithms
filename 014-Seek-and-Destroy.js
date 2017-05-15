//Seek and Destroy 

/*You will be provided with an initial array 
(the first argument in the destroyer function),
followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.*/

function destroyer(arr) {
  var allArgArr = Array.from(arguments);
  var arra=[1,2,3,4];
  var count=0;
  function se(val){
    var count=0;
    for(var i=1;i<allArgArr.length;i++)
    {if(val==allArgArr[i])count++;}
    return (count===0);
  }
  var x=arr.filter(se);
  return (x);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
