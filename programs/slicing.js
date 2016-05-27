function chunkArrayInGroups(str, size) {
    var output = [];
    for(var i=0; i < str.length; i += size){
      //Because a slice's second argument is exclusive
      if(i+size <= str.length){
        output.push(str.slice(i, i+size));
      }
      else{
        output.push(str.slice(i, str.length));
      }
        
    }

    return output;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
