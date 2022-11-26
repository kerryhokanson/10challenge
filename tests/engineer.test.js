const Engineer = require('../lib/engineer');

describe("getRole", () =>{
    it("should return the role 'engineer'", () => {
        const exampleEmployee = new Engineer();
        exampleEmployee.role = "Engineer";
        const expectedResult = "Engineer";
        const result = exampleEmployee.getRole();

        expect(result).toEqual(expectedResult);
    
    });
});


describe("getGithub", () =>{
    it("should return the Enginner's Github link", () => {
        const exampleEmployee = new Engineer();
        exampleEmployee.github = "github.som/person";
        const expectedResult = "github.som/person";
        const result = exampleEmployee.getGithub();

        expect(result).toEqual(expectedResult);
    
    });
});