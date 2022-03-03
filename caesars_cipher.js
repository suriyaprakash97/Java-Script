function rot13(str) {
  const list1 = str.split('');
  for (let i = 0;i<list1.length;i++){
    let a = str.charCodeAt(i)+13;
    if (a>90){
      a = (a-90+64);
    }
    if (list1[i].match(/[A-Za-z0-9]/)){
      let b = String.fromCharCode(a);
      list1[i] = b;
    }
  }
  return list1.join('');
}

rot13("SERR CVMMN!");
