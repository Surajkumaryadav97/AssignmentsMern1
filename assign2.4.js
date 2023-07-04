function validatePhoneNumber(phoneNumber) {
  
  var phonePattern = /^\d{10}$/;

  if (phonePattern.test(phoneNumber)) {
    return true; 
  } else {
    return false; 
  }
}

var phoneNumber1 = "123456790";
console.log(validatePhoneNumber(phoneNumber1)); 

var phoneNumber2 = "9876543215";
console.log(validatePhoneNumber(phoneNumber2)); 
