var chai = require("chai");
var expect = require("chai").expect;
var should = require("chai").should;
var assert = require("chai").assert;
var sinon = require("sinon");
// var alpacaBag = require("../public/assets/javascript/survey.js");


chai.should();

describe('MyAPI', function() {
  beforeEach(function() {
    this.xhr = sinon.useFakeXMLHttpRequest();

    this.requests = [];
    this.xhr.onCreate = function(xhr) {
      this.requests.push(xhr);
    }.bind(this);
  });

  afterEach(function() {
    this.xhr.restore();
  });

  it('should parse fetched data as JSON', function(done) {
    var data = { foo: 'bar' };
    var dataJson = JSON.stringify(data);

    myapi.get(function(err, result) {
      result.should.deep.equal(data);
      done();
    });

    this.requests[0].respond(200, { 'Content-Type': 'text/json' }, dataJson);
  });
});


// //test for the alpacaBag function
// describe("alpacaBag", function() {
//   it("should loop through our cities' results and identify the closest match", function() {
//     expect(alpacaBag(35)).to.equal("Istanbul");
//   });
//
//   it("should loop through our cities' results and identify the closest match", function() {
//     expect(alpacaBag(27)).to.equal("Cape Town");
//   });
//
//   it("should loop through our cities' results and identify the closest match", function() {
//     expect(alpacaBag(50)).to.equal("New York City");
//   });
// });
//
// // test for the destinationMatch function
//
// describe("destinationMatch", function() {
//   it("should loop through our cities' results and identify the closest match", function() {
//     expect(destinationMatch(35)).to.equal("Istanbul");
//   });
//
//   it("should loop through our cities' results and identify the closest match", function() {
//     expect(alpacaBag(27)).to.equal("Cape Town");
//   });
//
//   it("should loop through our cities' results and identify the closest match", function() {
//     expect(alpacaBag(50)).to.equal("New York City");
//   });
// });
//
//
//
// // Fake server code
// var server;
//
// before(function () { server = sinon.fakeServer.create(); });
// after(function () { server.restore(); });
//
// it("calls callback with deserialized data", function () {
//     var callback = sinon.spy();
//     getTodos(42, callback);
//
//     // This is part of the FakeXMLHttpRequest API
//     server.requests[0].respond(
//         200,
//         { "Content-Type": "application/json" },
//         JSON.stringify([{ id: 1, text: "Provide examples", done: true }])
//     );
//
//     assert(callback.calledOnce);
// });
//
// // Fake XMLHttpRequest code
// var xhr, requests;
//
// before(function () {
//     xhr = sinon.useFakeXMLHttpRequest();
//     requests = [];
//     xhr.onCreate = function (req) { requests.push(req); };
// });
//
// after(function () {
//     // Like before we must clean up when tampering with globals.
//     xhr.restore();
// });
//
// it("makes a GET request for todo items", function () {
//     getTodos(42, sinon.spy());
//
//     assert.equals(requests.length, 1);
//     assert.match(requests[0].url, "/todo/42/items");
// });
