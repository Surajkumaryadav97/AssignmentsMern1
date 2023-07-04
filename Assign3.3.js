  //Question 3
  function checkStringsAnagram(a, b) {
    var len1 = a.length;
    var len2 = b.length;
    if(len1 !== len2){
       console.log('Invalid Input');
       return
    }
    var str1 = a.split('').sort().join('');
    var str2 = b.split('').sort().join('');
    if(str1 === str2){
       console.log("True");
    } else { 
       console.log("False");
    }
 }
 checkStringsAnagram("marp","army")
 checkStringsAnagram("sharad","drasha")
 checkStringsAnagram("meow","owe")