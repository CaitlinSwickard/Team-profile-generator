const Employee = require("../lib/employee")

// test for class Employee
describe("Employee", () => {

    it("should return an object", () => {
      const employee = new Employee();

      expect(typeof (employee)).toBe("object");
    })
  });

  // test for getName
  describe("getName", () => {

    it("should return a string of the employees name", () => {
      const name = new Employee('Amber');

      expect(name.getName()).toEqual('Amber');
    })
  });

  // test for getId
  describe("getId", () => {

    it("should return a number of the employees id", () => {
      const id = new Employee('Amber', 1);

      expect(id.getId()).toEqual(1);
    })
  });

  // test for getEmail
  describe("getEmail", () => {

    it("should return a string of the employees email", () => {
      const email = new Employee('Amber', 1, 'fakeemail@gmail.com');

      expect(email.getEmail()).toEqual('fakeemail@gmail.com');
    })
  });

  // test for getRole
  describe("getRole", () => {

    it("should return a string of the employees role", () => {
      const role = new Employee('Amber', 1, 'fakeemail@gmail.com', 'Employee');

      expect(role.getRole()).toEqual('Employee');
    })
  })


