let expect = require("chai").expect;
let isOddOrEven = require("../even-or-odd").isOddOrEven;

describe("checks if the string length is odd, even or undefined", function () {
    it("should return undefined for 7(not a string)", function () {
        let result = isOddOrEven(7);
        expect(result).to.be.equal(undefined);
    });

    it("should return even for 'string'", function () {
        let result = isOddOrEven("string");
        expect(result).to.be.equal("even");
    });

    it("should return odd for 'odd'", function () {
        let result = isOddOrEven("odd");
        expect(result).to.be.equal("odd");
    });
})