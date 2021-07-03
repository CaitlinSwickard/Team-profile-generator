const Manager = require("../lib/manager")

// test for Manager
describe("Manager", () => {

  it("should return an object", () => {
    const manager = new Manager();

    expect(typeof (manager)).toBe("object");
  })
});

// test for getOfficeNum
describe("getOfficeNum", () => {

  it("should return a number of the office for the manager", () => {
    const officeNum = new Manager('Amber', 1, 'fakeemail@gmail.com', 12);

    expect(officeNum.getOfficeNum()).toEqual(12);
  })
});

// test for getRole
describe("getRole", () => {

  it("should return a string of employees for of manager", () => {
    const role = new Manager('Amber', 1, 'fakeemail@gmail.com', 12, 'Manager');

    expect(role.getRole()).toEqual('Manager');
  })
});



