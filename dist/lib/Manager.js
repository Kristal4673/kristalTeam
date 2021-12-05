var inquirer = require("inquirer");
const fs = require("fs");
class managers extends Employee {

  constructor(position) {
   this.position = position 
  }
  getRole() {
    console.log(this.position); 
  } else {
  return manager; 
  }
  //add validation to ensure that user input is in the proper format. 
inquirer
  .prompt([
    /* Passing questions for command-line prompt here in object */
    {
      name: "office",
      message: " What is the office number?",
      type: "input",
    },
    {
      name: "roles",
      message: "roles",
      type: "input",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    // {{input}}
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });



module.exports = Manager; 