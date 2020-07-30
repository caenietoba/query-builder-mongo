const { expect } = require("chai");
const { validateIsArray, validateStage, isPlainObject } = require("../helper");

describe("helpers", () => {
  describe("validateIsArray", () => {
    it("throws error", () => {
      expect(() => {
        validateIsArray("");
      }).to.throw(Error, "An array must be passed");
    });

    it("Is an array", () => {
      expect(() => {
        validateIsArray([]);
      }).not.to.Throw(Error);
    });
  });

  describe("validateStage", () => {
    it("Not plain object", () => {
      expect(() => {
        validateStage("");
      }).to.throw(Error, `Stage must be a js plain object`);
    });

    it("Plain object with a number of keys different to 1", () => {
      expect(() => {
        validateStage({});
      }).to.throw(Error, `Stage must be a js plain object`);

      expect(() => {
        validateStage({ field1: "", field2: "" });
      }).to.throw(Error, `Stage must be a js plain object`);
    });

    it("Good object", () => {
      expect(() => {
        validateStage({ $match: { _id: "" } });
      }).not.to.Throw(Error);
    });
  });

  describe("isPlainObject", () => {
    it("Is plain object", () => {
      expect(isPlainObject({})).to.be.true;
    });

    it("Is not plain object", () => {
      expect(isPlainObject(() => {})).to.be.false;
      expect(isPlainObject("")).to.be.false;
      expect(isPlainObject(class asd {})).to.be.false;
    });
  });
});
