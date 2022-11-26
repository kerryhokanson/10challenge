const Intern = require('../lib/intern');

describe("getRole", () =>{
    it("should return the role 'Intern'", () => {
        const exampleEmployee = new Intern();
        exampleEmployee.role = "Intern";
        const expectedResult = "Intern";
        const result = exampleEmployee.getRole();

        expect(result).toEqual(expectedResult);
    
    });
});


describe("getSchool", () => {
    it("should return the intern's school", () => {
        const exampleEmployee = new Intern();
        exampleEmployee.school = "some college";
        const expectedResult = "some college";
        const result = exampleEmployee.getSchool();

        expect(result).toEqual(expectedResult);
    
    });
});
