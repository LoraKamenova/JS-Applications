let expect = require("chai").expect;
let createCalculator = require("../create-calculator").createCalculator;

describe("calculator to add/substract", function () {
    it("should create calculator", function () {
        let result = createCalculator();
        expect(result).to.exist;
    });

    it("should test calculator add", function () {
        let result = createCalculator();
        result.add(5);
        expect(result.get()).to.be.equal(5);
    });

    it("should test calculator add and subtract", function () {
        let result = createCalculator();
        result.add(10);
        result.subtract(3);
        expect(result.get()).to.be.equal(7);
    });
})