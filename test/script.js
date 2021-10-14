/* My task is to build a Node.js command-line application CLI */
const inquirer = require("inquirer");
const jest = require("jest");
const Engineer = require(".//engineer.js");
const Intern = require(".//intern.js");
const Manager = require(".//manager.js");
var employeeId = 0;
var teamCrystal = [];

var inquirer = require("inquirer");
inquirer
  .prompt([
    /* Pass your questions in here */
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