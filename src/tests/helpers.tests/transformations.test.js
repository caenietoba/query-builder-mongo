const { expect } = require("chai");
const { transformToArray } = require("../../helpers/transformations");

describe("Transformation helper", () => {
  describe("Method: transformToArray", () => {
    it("Transform object to array", () => {
      expect(transformToArray({})).to.be.eql([{}]);
    });

    it("Transform string to array", () => {
      expect(transformToArray("test")).to.be.eql(["test"]);
    });

    it("Transform array to array", () => {
      expect(transformToArray([1, 2, 3])).to.be.eql([1, 2, 3]);
    });

    it("Undefined entry", () => {
      expect(transformToArray(undefined)).to.be.eq(undefined);
    });

    it("null entry", () => {
      expect(transformToArray(null)).to.be.eq(null);
    });
  });
});
