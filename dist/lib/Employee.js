var inquirer = require("inquirer");
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
      message: "What would you like to do?",
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
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
