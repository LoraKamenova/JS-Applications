let expect = require("chai").expect;
let isSymmetric = require("../check-for-symentry").isSymmetric;

describe("is the given array symmetric", function () {
    it("should return true for [1,2,1]", function () {
        let actual = isSymmetric([1, 2, 1]);
        expect(actual).to.be.equal(true);
    });

    it("should return true for [1,2,2]", function () {
        let actual = isSymmetric([1, 2, 2]);
        expect(actual).to.be.equal(false);
    });

    it("should return true for 2", function () {
        let actual = isSymmetric(2);
        expect(actual).to.be.equal(false);
    });
})