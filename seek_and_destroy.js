function destroyer(arr,...vals) {
  for (let i = 0; i<vals.length;i++){
    let j = arr.indexOf(vals[i]);
    while (j!==-1){
      arr.splice(j,1);
      j = arr.indexOf(vals[i]);
    }
  }
  console.log(arr);
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
