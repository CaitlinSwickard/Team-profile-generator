const Employee = require("../lib/employee")

describe("Employee", () => {

    it("should return an object", () => {
      const employee = new Employee();

      expect(typeof (employee)).toBe("object");
    })
  });

