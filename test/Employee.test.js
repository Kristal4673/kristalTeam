// The other three classes will extend `Employee`.*/
const inquirer = require("inquirer");
const Manager = require("./Manager.test.js");
const Engineer = require("./Engineer.test.js");
const Intern = require("./Intern.test.js");
const Employee = require("./Employee.test.js");
var employeeId = 0;
var teamCrystal = [];

/*


* `id`

* `email`

* `getName()`

* `getId()`

* `getEmail()`

* `getRole()`&mdash;
returns `'Employee'`*/