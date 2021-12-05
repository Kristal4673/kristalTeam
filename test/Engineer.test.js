/* My task is to build a Node.js command-line application CLI */
const Engineer = require('../lib/Engineer')


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


