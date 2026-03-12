function isAnagram(str1,str2){
  if(str1.length != str2.length){
    return false;
  }
  return str1.split('').sort().join() === str2.split('').sort().join()?'Anagram':'Not Anagram';
}
const result1 = isAnagram('silent', 'listen');
console.log(result1);

const result2 = isAnagram('pass', 'listen');
console.log(result2);