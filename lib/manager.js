const Employee = require('./employee')

// add office number, role returns manager
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  
  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return 'Manager';
  }

}


module.exports = Manager;
