var inquirer = require("inquirer");
const Employee = require("./Employee");

const fs = require("fs");

class Manager extends Employee {

  constructor(name, id, email, officeNumber) {
    super(name, id, email)
    this.officeNumber = officeNumber
  }
  getRole() {
    return "Manager"
  }
  getOfficeNumber() {
    return this.officeNumber
  }
  }
  //add validation to ensure that user input is in the proper format. 
// const ManagerPrompt = async() => {

// await inquirer
//   .prompt([ 
//     /* Passing questions for command-line prompt here in object */
//     {
//       name: "office",
//       message: " What is the office number?",
//       type: "input",
//     },
//     {
//       name: "roles",
//       message: "roles",
//       type: "input",
//     },
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//     // {{input}}
//     console.log(answers);
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });

// }

module.exports = Manager; 