function palindrome(str) {
  const str1 = str.split(/[^A-Za-z0-9]/).join('').toLowerCase();
  const list1 = str1.split('');
  const str2 = list1.reverse().join('');
  console.log(str1);
  console.log(str2);
  if (str1===str2){
    return true;
  }
  return false;
}

palindrome("five|\_/|four");
