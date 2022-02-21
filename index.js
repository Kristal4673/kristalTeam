const Manager = require("./lib/Manager.js");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const inquirer = require("inquirer");
const fs = require("fs");
const makeCard = require("./src/helper.js");

const employeeArray = []; //It starts with an array

async function start() {
  //await return means wait for this function to actually fetch data before going to the next function
  return await inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your manager's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your manager's Email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your manager's office Number?",
      },
    ])
    .then((answers) => {
      employeeArray.push(`
        <div class="ctn">
          <h1>MANAGER</h1>
          <p>Name : ${answers.name}</p>
          <p>ID : ${answers.id}</p>
          <p>Email : ${answers.email}</p>
          <p>Office # : ${answers.officeNumber}</p>
        </div>
      `);
      addEmployee();
    });
}

async function addEmployee() {
  inquirer
    .prompt({
      type: "input",
      name: "answer",
      message: "Do you want to add employee?",
    })
    .then(({ answer }) => {
      if (answer == "yes") chooseEmployee();
      else if (answer == "no") htmlCreate();
      else {
        console.log("please enter yes or no ");
        addEmployee();
      }
    });
}
async function chooseEmployee() {
  inquirer
    .prompt({
      type: "input",
      name: "employeeType",
      message: "Which employee are you?",
    })
    .then(({ employeeType }) => {
      if (employeeType == "Engineer") engineerPrompt();
      else if (employeeType == "Intern") internPrompt();
      else {
        console.log("please enter Intern or Engineer ");
        chooseEmployee();
      }
    });
}

async function engineerPrompt() {
  return await inquirer
    .prompt([
      {
        type: "github",
        name: "username",
        message: "What is your Github username?",
      },

      {
        type: "input",
        name: "name",
        message: "What is Engineers name?",
      },
      {
        type: "input",
        name: "id",
        message: "What the Engineers ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What Engineers Email?",
      },
      {
        type: "Duplicate",
        name: "roles",
        message: "What role are you , Manager, Engineer, Employee?"
      },
    ])

    .then((answers) => {
      employeeArray.push(`
        <div class="ctn">
          <h1>ENGINEER</h1>
          <p>Username : ${answers.username}</p>
          <p>Roles : ${answers.roles}</p>
           <p>ID : ${answers.id}</p>
          <p> Name : ${answers.name}</p>
            <p>Email : ${answers.email}</p>
        </div>
      `);
      addEmployee();
      // return answers;
    });
}


async function employeePrompt() {
  return await inquirer
    .prompt([
      {
        name: "name",
        message: " What is Team Member's name?",
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
        console.log(Error);
      } else {
        // Something else went wrong                                `
        console.log(Err);
      }
    });
}
async function internPrompt() {
  return await inquirer
    .prompt([
      {
        name: "School",
        message: " What school are you from ?",
        type: "input",
      },
      {
        type: "input",
        name: "name",
        message: "What is your manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your manager's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your manager's Email?",
      },
      {
        name: "roles",
        message: "roles",
        type: "input",
      },
    ])
    .then((answers) => {
      employeeArray.push(`
        <div class="ctn">
          <h1>INTERN</h1>
          <p>School : ${answers.School}</p>
          <p> Role : ${answers.roles}</p>
           <p>ID : ${answers.id}</p>
          <p> Name : ${answers.name}</p>
            <p>Email : ${answers.email}</p>
        
        </div>
      `);
      // Use user feedback for... whatever!!
      addEmployee();
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}
const htmlCreate = () => {
  console.log(employeeArray);
  employeeArray.join();

  // console.log('cards', cards)

  fs.writeFile(
    "sample.html",
    `
    <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <!-- jQuery library -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <!-- Latest compiled JavaScript -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="/Users/crystal/Desktop/SMU-BOOTCAMP /assignments/myTeam/style.css">
  <link rel="stylesheet" href="./sample.css">
  <title>My Team </title>
</head>

<body>

    <div class="title">
      <h1 class="title-h1">Team Generator</h1>
    </div>


    ${employeeArray}
</body>

</html>
    
    `,
    () => {
      // console.log(htmlCreate);
    }
  );
};

const init = async () => {
  //shift option down to copy multiline
  // const {name, id, email, officeNumber} = await start()
  // const {username, roles} = await engineerPrompt()
  // const { School, roles:interroles } = await interPrompt()
  start();
};

init();
