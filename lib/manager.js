const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super (name, id, email)
        this.role = "Manager";
        this.officeNumber = officeNumber;
    }
    getRole = () => this.role;
    getOfficeNumber = () => this.officeNumber;
}

Manager.prototype.getRole = function () {}
Manager.prototype.getOfficeNumber = function () {}


module.exports = Manager;