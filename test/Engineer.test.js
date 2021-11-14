/* My task is to build a Node.js command-line application CLI */
const inquirer = require("inquirer");
const jest = require("jest");
const Engineer = require("./engineer.js.js");
const Intern = require("./intern.js.js");
const Manager = require("./manager.js.js");
var employeeId = 0;
var teamCrystal = [];

var inquirer = require("inquirer");
inquirer
  .prompt([
    /* Pass your questions in here */
    type
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });



  const inquirer = require("inquirer");
  const fs = require("fs");

  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "checkbox",
        message: "What languages do you know?",
        name: "stack",
        choices: ["HTML", "CSS", "JavaScript", "MySQL"],
      },
      {
        type: "list",
        message: "What is your preferred method of communication?",
        name: "contact",
        choices: ["email", "phone", "telekinesis"],
      },
    ])
    .then((data) => {
      const filename = `${data.name.toLowerCase().split(" ").join("")}.json`;

      fs.writeFile(filename, JSON.stringify(data, null, "\t"), (err) =>
        err ? console.log(err) : console.log("Success!")
      );
    });