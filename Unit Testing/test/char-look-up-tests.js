let expect = require("chai").expect;
let lookupChar = require("../char-look-up").lookupChar;

describe("returns the index of a char from string ", function () {
    it("should return undefined for invalid string", function () {
        let result = lookupChar(7, 0 );
        expect(result).to.be.equal(undefined);
    });

    it("should return undefined for invalid invalid index", function () {
        let result = lookupChar("app", "a" );
        expect(result).to.be.equal(undefined);
    });

    it("should return Incorrect index for negative index", function () {
        let result = lookupChar("app", -1 );
        expect(result).to.be.equal('Incorrect index');
    });

    it("should return Incorrect index for out of range index", function () {
        let result = lookupChar("app", 6 );
        expect(result).to.be.equal("Incorrect index");
    });

    it("should return 'p' for '1'", function () {
        let result = lookupChar("app", 1 );
        expect(result).to.be.equal("p");
    });
    it("should return correct chars for multiple input", function () {
        let result = lookupChar("app", 0 );
        let result2 = lookupChar("app", 1 );
        let result3 = lookupChar("app", 2 );
        expect(result).to.be.equal("a");
        expect(result2).to.be.equal("p");
        expect(result3).to.be.equal("p");
    });
})