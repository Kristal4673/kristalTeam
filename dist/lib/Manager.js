var inquirer = require("inquirer");
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
