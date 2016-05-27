function rot13(str) { // LBH QVQ VG!
    var output = "";
  for(var i=0; i<str.length; i++){
     if(str[i].match(/\w/g)){
        var old_index = str.charCodeAt(i);
        var new_index = old_index + 13;
        if(new_index > 90){
            new_index = (new_index % 90) + 65;
        }
        var decoded = String.fromCharCode(new_index); 
        output += decoded;
     }else{
        output += str[i];
     }

  } 
  return output;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
