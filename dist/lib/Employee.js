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
      console.log(ERROR)
    } else {
      // Something else went wrong                                `
      console.log(Err)
    }
  });
