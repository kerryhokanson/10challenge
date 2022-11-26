const Manager = require('../lib/manager');

describe("getRole", () =>{
    it("should return the role 'manager'", () => {
        const exampleEmployee = new Manager();
        exampleEmployee.role = "manager";
        const expectedResult = "manager";
        const result = exampleEmployee.getRole();

        expect(result).toEqual(expectedResult);
    
    });
});


describe("getOfficeNumber", () =>{
    it("should return the Manager's Office Number", () => {
        const exampleEmployee = new Manager();
        exampleEmployee.officeNumber = 1234;
        const expectedResult = 1234;
        const result = exampleEmployee.getOfficeNumber();

        expect(result).toEqual(expectedResult);
    
    });
});
