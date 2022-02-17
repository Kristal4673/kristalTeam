const inquirer = require("inquirer");
// import { Employee } from "./Employee";
const Employee = require('./Employee.js')
const fs = require("fs");
  
class Engineer extends Employee {

  constructor(name, id, email, github) {
   super (name, id, email)
   this.github = github
  }
  getGithub() {
    return this.github
  }
  getRole() {
    return 'Engineer'
  }
  
  }
//add validation to ensure that user input is in the proper format. 
  // inquirer
  //   .prompt([
  //     {
  //       type: "github",
  //       name: "username",
  //       message: "What is your Github username?"
  //     },
  //     {
  //       type: "Duplicate",
  //       message: "What is your role?",
  //       name: "roles",
  //       choices: ["Manager", "Engineer", "Employee"]
  //     },
  //   ])
  //   .then((data) => {
  //     console.log(username)
      
  //     fs.writeFile(filename, JSON.stringify(data, null, "\t"), (err) =>
  //       err ? console.log(err) : console.log("Success!")
  //     );
  //   });
module.exports = Engineer;  