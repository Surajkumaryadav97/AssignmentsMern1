question 1
const currentTime = new Date();

const hour = currentTime.getHours();
const minute = currentTime.getMinutes();
const second = currentTime.getSeconds();


let hour12 = hour % 12;
if (hour12 === 0) {
  hour12 = 12; 
}

const hourFormat = hour < 12 ? "AM" : "PM";


const formattedMinute = minute.toString().padStart(2, "0");
const formattedSecond = second.toString().padStart(2, "0");

const formattedTime = `Current time is: ${hour12} ${hourFormat}: ${formattedMinute} : ${formattedSecond}`;