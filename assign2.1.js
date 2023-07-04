function sumoddEvenplace(number){
  var numString=number.toString();
  var oddSum=0;
  var evenSum=0;

for(var i=0; i<numString.length; i++){
  var digit = parseInt(numString[i]);

  if((i+1) % 2===0){
      evenSum+=digit;
    } 
      else{
        oddSum+=digit; }

      }
    
      return {oddSum, evenSum};
    }

    var number = 2914;
var result = sumOddEvenPlaces(number);
console.log(result.sumOdd);   // Output: 6
console.log(result.sumEven); 
