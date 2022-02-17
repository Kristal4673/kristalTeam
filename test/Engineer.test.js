const Engineer = require('../lib/Engineer');

let newEngineer = new Engineer('Doug', 2, 'doug@doug.com', 'doug123');

describe('Engineer tests', () => {
  test("Get Name Methods", () => {
    expect(newEngineer.getName()).toEqual("Doug");
  });
  test("Get ID", () => {
    expect(newEngineer.getID()).toEqual(2);
  });
  test("Get Email", () => {
    expect(newEngineer.getEmail()).toEqual("doug@doug.com");
  });
  test("Get Github", () => {
    expect(newEngineer.getGithub()).toEqual("doug123");
  });
  test("Get Name Methods", () => {
    expect(newEngineer.getRole()).toEqual("Engineer");
  });
})


