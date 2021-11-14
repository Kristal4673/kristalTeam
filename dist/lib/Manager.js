var inquirer = require("inquirer");
inquirer
  .prompt([
      /* Pass your questions in here */
      name: {{input}},
      id: "1",
      email: "crystal@gmail.com"
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
      {{input}}
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
