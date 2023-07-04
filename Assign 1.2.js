const date = new Date();
const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0');
const year = date.getFullYear();

const formattedDate1 = `${month}-${day}-${year}`;
console.log(formattedDate1);

const formattedDate2 = `${month}/${day}/${year}`;
console.log(formattedDate2);

const formattedDate3 = `${day}-${month}-${year}`;
console.log(formattedDate3);

const formattedDate4 = `${day}/${month}/${year}`;
console.log(formattedDate4);
