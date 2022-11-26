class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
    }

    getName = () => this.name;

    getId = () => this.id;

    getEmail = () => this.email;

    getRole = () => this.role;

}

Employee.prototype.getName = function () {}
Employee.prototype.getID = function () {}
Employee.prototype.getEmail = function () {}
Employee.prototype.getRole = function () {}

module.exports = Employee;
