var expect = require("chai").expect;
var assert = require("chai").assert;
//NOTE: assert is NOT chainable!!! I am more familiar with it though

var multiply = function (x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        throw new Error("x or y is not an integer.");
    }
    else return x * y;
};
// multiply(2, 4);

//test for the multiply function
describe("multiply", function () {
    it("should multiply properly when passed numbers", function () {
        expect(multiply(2, 4)).to.equal(8);
    });

    it("should throw error when not passed numbers", function () {
        expect(function () {
            multiply("6", "4");
        }).to.throw(Error);
    });

    it("should return the integer eight", function () {
        assert.equal(8, '8', '== coerces values to strings');
    })
});