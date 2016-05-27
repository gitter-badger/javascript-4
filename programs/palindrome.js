function palindrome(str) {
  // Good luck!
  str = str.toLowerCase();
  var regex = /[a-z0-9]+/g;
  var char_array = str.match(regex);
  var i;
  var j;
  if(char_array === null){
    console.log("char_array is null");
    return true;
  }

  var final_str = char_array.join('');
  char_array = final_str.split('');
  console.log("char array is:" + char_array);
  
  var len = char_array.length;
  
  
  for(i=0, j = len - 1; i < len, j>i; i++, j--){
    console.log(char_array[i]);
    console.log(char_array[j]);
    if(char_array[i] !== char_array[j]){
      return false;
    }
  }
  return true;
}



if(palindrome("1 eye for of 1 eye.")){
    console.log("is palindrome");
}else{
    console.log("NOT palindrome");
}
//palindrome("eye");
