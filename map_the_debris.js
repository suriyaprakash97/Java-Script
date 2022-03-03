function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  for (let i=0;i<arr.length;i++){
    let a = arr[i].avgAlt+earthRadius;
    let k=Math.round(2*Math.PI*Math.sqrt(a**3/GM));
    console.log(k);
    delete arr[i].avgAlt;
    arr[i].orbitalPeriod = k;
  }
  console.log(arr);
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
