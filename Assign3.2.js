//Question 2
function Triangle(A,B,C, callback){
  if(A==B && B==C){
    callback(true);
  }
  else{
    callback(false);
  }

}
 function checkEquilateral(isEquilateral){
  console.log(isEquilateral);
 }
  Triangle(5,5,5,checkEquilateral);
  Triangle(4,5,3,checkEquilateral);
  Triangle(6,6,6,checkEquilateral);
