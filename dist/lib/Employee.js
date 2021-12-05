
const inquirer = require("inquirer");
const 

class Employee {
  // Save a reference for `this` in `this` as `this` will change inside of inquirer
  constructor(person) {
    this.person = Employee; 
  }
  // Setting methods up for class employee
getName() {
  console.log("getting name of emp"); 
  }
  getID() {
   
    console.log(geting ID of this employee); 
  
 }
  getEmail() {
    console.log("getting email of Emp"); 

}
  getRole() {
    console.log("Getting the roles of Emp ")

  }
  else {
  return Employee;
}
}
var inquirer = require("inquirer");
const fs = require("fs");
inquirer
  .prompt([
    {
      name: "name",
      message: " What is Member's name?",
      type: "input",
    },
    {
      name: "info",
      message: "Summary bio on Member",
      type: "input",
    },
    {
      name: "id",
      message: "What is Members ID Number?",
      type: "input",
    },
    {
      name: "role",
      message: "Which employee's role do you want to update?",
      type: "input",
    },
    {
      name: "github",
      message: "What is your github username?",
      type: "input",
    },
  ])
  .then((answers) => {
    console.log(answers); 
  
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log(Error)
    } else {
      // Something else went wrong                                `
      console.log(Err)
    }
  });


module.exports = Employee; 