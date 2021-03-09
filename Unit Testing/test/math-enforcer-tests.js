let expect = require("chai").expect;
let mathEnforcer = require("../math-enforcer").mathEnforcer;

describe("math enforcer", function () {
    describe("add functionality", function () {
        it("should return undefined when invalid number is given for adding", function () {
            let result = mathEnforcer.addFive('d');
            expect(result).to.be.equal(undefined);
        });
        it("should return 7 when input is 2", function () {
            let result = mathEnforcer.addFive(2);
            expect(result).to.be.equal(7);
        });
    })

    describe("subtract functionality", function () {
        it("should return undefined when invalid number is given for subtracting", function () {
            let result = mathEnforcer.subtractTen('d');
            expect(result).to.be.equal(undefined);
        });
        it("should return 2 when input is 12", function () {
            let result = mathEnforcer.subtractTen(12);
            expect(result).to.be.equal(2);
        });
    })

    describe("sum functionality", function () {
        it("should return undefined when num1 is invalid number", function () {
            let result = mathEnforcer.sum('d', 1);
            expect(result).to.be.equal(undefined);
        });
        it("should return undefined when num2 invalid number", function () {
            let result = mathEnforcer.sum(1, 'd');
            expect(result).to.be.equal(undefined);
        });
        it("should return 15 when input is 12 and 3", function () {
            let result = mathEnforcer.sum(12, 3);
            expect(result).to.be.equal(15);
        });
    })
})