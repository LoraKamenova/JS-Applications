let expect = require("chai").expect;
let color = require("../rgb-to-hex").rgbToHexColor;

describe("turn rgb color to its hex representation", function () {
    it("should return undefined for [145, 455, 100]", function () {
        let actual = color(145, 455, 100);
        expect(actual).to.be.equal(undefined);
    });

    it("should return undefined for [2.5, 100, 100]", function () {
        let actual = color(2.5, 100, 100);
        expect(actual).to.be.equal(undefined);
    });

    it("should return undefined for [50, 107, 28]", function () {
        let actual = color(50, 107, 28);
        expect(actual).to.be.equal("#326B1C");
    });
})