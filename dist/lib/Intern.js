
const inquirer = require("inquirer");
const 

class school extends employee {
  // Save a reference for `this` in `this` as `this` will change inside of inquirer
  constructor(school) {
    this.school= school; 
  }
  // Setting methods up for class employee
getSchool() {
  console.log("getting name of school"); 
  }
  getRole() {
   
    console.log(geting ID of this employee); 
  }
  else {
  return Intern;
}
}
//add validation to ensure that user input is in the proper format. 

var inquirer = require("inquirer");
inquirer
  .prompt([
    {
      name: "School",
      message: " What school are you from ?",
      type: "education"
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


module.exports = Intern; 
