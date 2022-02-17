
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

// let Crystal = new Employee('crystal')
// Crystal.getName()
// console.log(Crystal)


// var inquirer = require("inquirer");
// const fs = require("fs");
// inquirer
//   .prompt([
//     {
//       name: "name",
//       message: " What is Team Member's name?",
//       type: "input",
//     },
//     {
//       name: "info",
//       message: "Summary bio on Member",
//       type: "input",
//     },
//     {
//       name: "id",
//       message: "What is Members ID Number?",
//       type: "input",
//     },
//     {
//       name: "role",
//       message: "Which employee's role do you want to update?",
//       type: "input",
//     },
//     {
//       name: "github",
//       message: "What is your github username?",
//       type: "input",
//     },
//   ])
//   .then((answers) => {
//     console.log(answers); 
  
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//       console.log(Error)
//     } else {
//       // Something else went wrong                                `
//       console.log(Err)
//     }
//   });


module.exports = Employee; 
