//Falsy Bouncer

/*Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/
function test(value)
{
    return value!==false &&  
       value !==0        &&
       value !==null     &&
       value !==""       &&
       typeof value!=='undefined'&&
       !Number.isNaN(value);
}

function bouncer(arr) {
  // I DID IT :P 
  var filtered = arr.filter(test);
  return filtered;
}

bouncer([false,1, null,NaN, 2, undefined,0,""]);
