function destroyer(arr) {
  // Remove all the values
  var len = arguments.length;
  var args = arguments;
  if(len > 1){
     arr =  arr.filter(function(val){
        var matches = false;
        for(var i=1; i<len; i++){
          if(val === args[i]){
            matches = true;
          }
        }
        if(matches){
          return false;
        }
        return true;
      });
    
  }
  console.log(arr);
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

