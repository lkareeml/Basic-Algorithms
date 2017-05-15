//Chunky Monkey
/*Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.*/

function chunkArrayInGroups(arr, size) {
  var array=[];
  var begin=0;
  var end;
  //begin-end=size
  //arr.length/size=array.length
  for(var i=0;i<arr.length/size;i++)
  {
    end=begin+size;
    array.push(arr.slice(begin,end));
    begin+=size;
  }
  return array;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
