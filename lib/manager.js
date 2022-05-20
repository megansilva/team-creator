const Employee = require("./employee");

class Manager extends Employee {
    constructor (name, ID, email, officeNum) {
        super (name, ID, email);
        this.officeNum = officeNum;
    }
    getRole() {
        return Manager;
    }
    getOfficeNumber() {
        return this.officeNum;
    }
}

module.exports = Manager;