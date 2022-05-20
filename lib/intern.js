const Employee = require("./employee");

class Intern extends Employee {
    constructor (name, ID, email, school) {
        super (name, ID, email);
        this.school = school;
    }
    getRole() {
        return Engineer;
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;