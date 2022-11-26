const Employee = require('../lib/employee');

describe("getName", () =>{
    it("should return the name of the Employee", () => {
        const exampleEmployee = new Employee();
        exampleEmployee.name = "Bob"
        const expectedResult = "Bob";
        const result = exampleEmployee.getName();
 
        expect(result).toEqual(expectedResult);
    });
});

describe("getId", () =>{
    it("should return the id of the Employee", () => {
        const exampleEmployee = new Employee();
        exampleEmployee.id = 1234
        const expectedResult = 1234;
        const result = exampleEmployee.getId();
 
        expect(result).toEqual(expectedResult);
    });
});
describe("getEmail", () =>{
    it("should return the email of the Employee", () => {
        const exampleEmployee = new Employee();
        exampleEmployee.email = "person@website.com"
        const expectedResult = "person@website.com";
        const result = exampleEmployee.getEmail();
 
        expect(result).toEqual(expectedResult);
    });
});

describe("getRole", () =>{
    it("should return the role of the Employee", () => {
        const exampleEmployee = new Employee();
        exampleEmployee.role = "engineer"
        const expectedResult = "engineer";
        const result = exampleEmployee.getRole();
 
        expect(result).toEqual(expectedResult);
    });
});

// describe("getId", () =>{
//     it("should return the Id of the Employee", () => {
//         const expectedResult = 
//         const result = 


//         expect(result).toEqual(expectedResult);
    
//     });
// });
// describe("getEmail", () =>{
//     it("should return the email of the Employee", () => {
//         const expectedResult = 
//         const result = 


//         expect(result).toEqual(expectedResult);
    
//     });
// });
// describe("getRole", () =>{
//     it("should return the Role of the Employee", () => {
//         const expectedResult = 
//         const result = 


//         expect(result).toEqual(expectedResult);
    
//     });
