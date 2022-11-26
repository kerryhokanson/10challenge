const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school){
        super (name, id, email)
        this.school = school;
        this.role = "Intern"
    }
    getRole = () => this.role;
    getSchool = () => this.school;
}

Intern.prototype.getRole = function () {}
Intern.prototype.getSchool = function () {}

module.exports = Intern;