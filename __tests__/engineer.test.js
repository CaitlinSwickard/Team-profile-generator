const Engineer = require("../lib/engineer")

// test for engineer
describe("Engineer", () => {

  it("should return an object", () => {
    const engineer = new Engineer();

    expect(typeof (engineer)).toBe("object");
  })
});


// test for getGithub
describe("getGithub", () => {

  it("should return a sting of engineers github profile", () => {
    const github = new Engineer('Amber', 1, 'fakeemail@gmail.com','CaitlinSwickard');

    expect(github.getGithub()).toEqual('CaitlinSwickard');
  })
});

// test for getRole
describe("getRole", () => {

  it("should return a string of employees role", () => {
    const role = new Engineer('Amber', 1, 'fakeemail@gmail.com','CaitlinSwickard', 'Engineer');

    expect(role.getRole()).toEqual('Engineer');
  })
});
