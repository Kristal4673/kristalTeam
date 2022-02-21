
const inquirer = require("inquirer");

class Employee {
  // Save a reference for `this` in `this` as `this` will change inside of inquirer
  constructor(name, id, email, role="Employee") {
    // this.person = person; 
    this.name = name;
    this.id = id;
    this.role = role;
    this.email = email;
  }
  // Setting methods up for class employee
getName() {
   return this.name
  }
  getID() {
   
    return this.id;
  
 }
  getEmail() {
  return this.email;

}
  getRole() {
    return "Employee";

  }
 
  

}


module.exports = Employee; 
