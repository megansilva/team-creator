const Employee = require("./employee");

class Engineer extends Employee {
    constructor (name, ID, email, gitH) {
        super (name, ID, email);
        this.gitH = gitH;
    }
    getRole() {
        return Engineer;
    }
    getGitHub() {
        return this.gitH;
    }
}

module.exports = Engineer;