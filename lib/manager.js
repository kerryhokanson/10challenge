const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super Employee(name, id, email)
        this.role = "Manager";
        this.officeNumber = officeNumber;
    }
    getRole = () => this.role;
    getOfficeNumber = () => this.officeNumber;


}

module.exports = Manager;