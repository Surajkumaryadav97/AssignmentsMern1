//Question 4
function Employee(id, name, basic_Salary) {
  const HRA = 0.3 * basic_Salary;
  const DA  = 0.1 * basic_Salary;
  const TA = 0.2 * basic_Salary; 
  const GS = basic_Salary + HRA + DA + TA;
  const TD = 0.1 * GS;
  const NS = GS - TD;

  this.printSalarySlip = function(){
    console.log("Salary Slip");
    console.log(id);
    console.log(name);
    console.log(basic_Salary);
    console.log(HRA);
    console.log(DA);
    console.log(TA);
    console.log(GS);
    console.log(TD);
    console.log(NS);
  }
}

const employee = new Employee("E1234","Sharad",2000);
employee.printSalarySlip();
