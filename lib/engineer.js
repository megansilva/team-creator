const Employee = require("./employee");

class Engineer extends Employee {
    constructor (name, ID, email, gitH) {
        super (name, ID, email);
        this.gitH = gitH;
    }

    getGitHub() {
        return this.gitH;
    }
    
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;

