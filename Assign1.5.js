for(let year=2000;year<=2030;year++){
  const date = new Date(year,0,1);
  
  if(date.getDay()===0){
      console.log(`January 1st  ${year} is a sunday`);
  }
}