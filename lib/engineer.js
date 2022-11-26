const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.role = 'Engineer';
        this.github = github;
    }

    getRole = () => this.role;

    getGithub = () => this.github;

}

Engineer.prototype.getRole = function () {}
Engineer.prototype.getGithub = function () {}


module.exports = Engineer;