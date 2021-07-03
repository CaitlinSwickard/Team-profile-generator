const Intern = require("../lib/intern")

// test for Intern
describe("Intern", () => {

  it("should return an object", () => {
    const intern = new Intern();

    expect(typeof (intern)).toBe("object");
  })
});

// test for getSchool
describe("getSchool", () => {

  it("should return a string of the interns school name", () => {
    const school = new Intern('Amber', 1, 'fakeemail@gmail.com', 'DUBootCamp');

    expect(school.getSchool()).toEqual('DUBootCamp');
  })
});

// test for getRole
describe("getRole", () => {

  it("should return a string of the intern's role", () => {
    const role = new Intern('Amber', 1, 'fakeemail@gmail.com', 'DUBootCamp', 'Intern');

    expect(role.getRole()).toEqual('Intern');
  })
});

