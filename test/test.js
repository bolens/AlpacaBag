var expect = require("chai").expect;
var assert = require("chai").assert;
var sinon = require("sinon");
var alpacaBag = require("../public/assets/javascript/survey");
var xhr, requests;

before(function () {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function (req) { requests.push(req); };
});

after(function () {
    // Like before we must clean up when tampering with globals.
    xhr.restore();
});

it("makes a GET request for destinations", function () {
    alpacaBag(42, sinon.spy());

    assert.equals(requests.length, 1);
    assert.match(requests[0].url, "/api/destinations");
});



//test for the alpacaBag function
describe("alpacaBag", function () {
    it("should loop through our cities' results and identify the closest match", function () {
        expect(alpacaBag(35)).to.equal("Istanbul");
    });

    it("should loop through our cities' results and identify the closest match", function () {
        expect(alpacaBag(27)).to.equal("Cape Town");
    });

    it("should loop through our cities' results and identify the closest match", function () {
        expect(alpacaBag(50)).to.equal("New York City");
    });

    // it("should throw error when not passed numbers", function () {
    //     expect(function () {
    //         alpacaBag("6", "4");
    //     }).to.throw(Error);
    // });
    //
    // it("should return the integer eight", function () {
    //     assert.equal(8, '8', '== coerces values to strings');
    // })
});
