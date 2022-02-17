// The other three classes will extend `Employee`.*/


/*


* `id`

* `email`

* `getName()`

* `getId()`

* `getEmail()`

* `getRole()`&mdash;
returns `'Employee'`*/
const Employee = require("../lib/Employee");

let newEmployee = new Employee("Doug", 2, "doug@doug.com", "doug123");

describe("Employee Test", () => {
    test("Get Name Methods", () => {
        expect(newEmployee.getName()).toEqual("Doug");
    });
    test("Get ID", () => {
        expect(newEmployee.getID()).toEqual(2);
    });
    test("Get Email", () => {
        expect(newEmployee.getEmail()).toEqual("doug@doug.com");
    });
    test("Get Name Role", () => {
        expect(newEmployee.getRole()).toEqual("Employee");
    });
});
