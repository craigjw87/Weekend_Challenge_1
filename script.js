
var employee = [];
var totSal = 0;
var monthSpending = totSal / 12;
//Gathering user's input and storing into the console
var empData = function() {
  var firstName = document.getElementById( "empFirstName" ).value;
  var lastName = document.getElementById("empLastName").value;
  var identity = document.getElementById("empId").value;
  var posTitle = document.getElementById("empTitle").value;
  var yearlySalary = document.getElementById("empSalary").value;
  document.getElementById("empForm").reset();

//Creating an employee object from data gethered
  var empEntered = {
      "firstName": firstName,
      "lastName": lastName,
      "iD": identity,
      "positionTitle": posTitle,
      "sal": yearlySalary
    };
totSal += parseInt(yearlySalary);
//Finding out monthly spending
      parseFloat(yearlySalary);
        document.getElementById( "monthSpending" ).innerHTML = totSal/12;

//Pushing the new employee up to the employee array for storing
employee.push( empEntered );
empInfo();

  };
  //Displays employees in DOM
var empInfo = function (){
  document.getElementById("showEmp").innerHTML = " ";
  for( i=0; i< employee.length; i++ ){
    var empDom = "First Name: " + employee[i].firstName + "   Last Name: " + employee[i].lastName + "    Id Number: " + employee[i].iD + "    Position: " + employee[i].positionTitle + "    Yearly Salary: " + employee[i].sal + "Total Salary: " + totSal;
    document.getElementById("showEmp").innerHTML += '<p>' + empDom + '</p>';
  }
};
