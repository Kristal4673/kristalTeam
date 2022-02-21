
const Manager= require("../lib/Manager");

let newManager = new Manager("Doug", 2, "doug@doug.com", "doug123");

describe("Engineer tests", () => {
    test("Get Name Methods", () => {
        expect(newManager.getName()).toEqual("Doug");
    });
    test("Get ID", () => {
        expect(newManager.getID()).toEqual(2);
    });
    test("Get Email", () => {
        expect(newManager.getEmail()).toEqual("doug@doug.com");
    });
    test("Get Name Methods", () => {
        expect(newManager.getRole()).toEqual("Manager");
    });
});