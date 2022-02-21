const inquirer = require("inquirer");
const Employee = require("./Employee");

const fs = require("fs");

class Intern extends Employee {
  // Save a reference for `this` in `this` as `this` will change inside of inquirer
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  // Setting methods up for class employee
  getSchool() {
    return this.school;
  }
  getName() {
    return this.name;
  }
  getID() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
