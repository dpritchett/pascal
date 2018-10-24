const {assert} = require("chai");
const pascal = require("../pascal").pascal;

describe("pascal", function() {
  it("basic tests", function() {
    assert.deepEqual(pascal(1), [[1]]);
    assert.deepEqual(pascal(4), [[1],[1,1],[1,2,1],[1,3,3,1]]);
  });
});
