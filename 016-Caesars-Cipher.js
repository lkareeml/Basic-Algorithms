//Caesars Cipher 

/*One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔  'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.*/

function rot13(str) { // LBH QVQ VG!
  //My Hard Way "Tested and work correct"
  //***************************************//
  /*
  var x      = str.split('');
  var allChar= ['A','B','C','D','E','F','G','H','I','J',
                'K','L','M','N','O','P','Q','R','S','T',
                'U','V','W','X','Y','Z'];
  for(var i=0;i<x.length;i++){
    for(var j=0;j<26;j++){
      if(x[i]==allChar[j]){
        if(j+13>=26)
          {x[i] = allChar[j+13-26];break;}
        else if((j+13)<26)
          {x[i] = allChar[j+13];break;}
    }
   }
  }
  x=x.join('');
  return x;
*/
  
  //***************************************//
  
  //Easy Way with .charCodeAt() & fromCharCode() 
  
  var x="";
  //A==65 & Z ==90
  for(var i=0;i<str.length;i++)
    {var y = str.charCodeAt(i);
    if(y<65||y>90)
      x += String.fromCharCode(y);
    else if((y+13)>90)
      x+= String.fromCharCode(y-13);
    else 
      x += String.fromCharCode(y+13);
    }
  return  x;

}

// Change the inputs below to test
rot13("LBH QVQ VG");
