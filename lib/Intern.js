const inquirer = require("inquirer");
const Employee = require("./Employee");

const fs = require("fs");

class Intern extends Employee {
  // Save a reference for `this` in `this` as `this` will change inside of inquirer
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  // Setting methods up for class employee
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}
//add validation to ensure that user input is in the proper format.

// var inquirer = require("inquirer");
// inquirer
//   .prompt([
//     {
//       name: "School",
//       message: " What school are you from ?",
//       type: "education",
//     },
//     {
//       name: "roles",
//       message: "roles",
//       type: "input",
//     },
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });

module.exports = Intern;
