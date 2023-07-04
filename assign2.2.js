function capitalzeWrds(str){
  var w = str.split(" ");

for(var i=0;i<w.length;i++){
  w[i] = w[i][0].toUpperCase() + w[i].substring(1);
}
  var capStr = w.join(" ");
  return capStr;
}
undefined
var inString = 'learn javascript from brain mentors';
undefined
var capString = capitalzeWrds(inString);
undefined
console.log(capString);
VM1581:1 Learn Javascript From Brain Mentors
undefined