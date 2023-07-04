//Question 1
function Calc(){
  var add = function(x,y){
    return x+y;
  }
  var sub = function(x,y){
    return x-y;
  }
  var mul = function(x,y){
    return x*y;
  }
  var div = function(x,y){
    return x/y;
  }
  return [add,sub,mul,div];
}

console.log(10+2);
console.log(10-4);
console.log(12*8);
console.log(12/4);
