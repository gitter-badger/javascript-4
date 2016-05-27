function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.sort(function(a, b){
    return (a-b);
  });
  console.log(arr);
  var i=0;
  for(; i< arr.length && arr[i] < num; i++);
  console.log("i:" + i + "arr[" + i + "]:" + arr[i]);
  return i;
}

//getIndexToIns([40, 60], 50);
getIndexToIns([5, 3, 20, 3], 5);
