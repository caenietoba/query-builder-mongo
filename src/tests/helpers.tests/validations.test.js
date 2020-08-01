const { expect } = require("chai");
const { isPlainObject, validateStage } = require("../../helpers/validations");
const {
  errorMessages: { notPlainObject, notMongoStage },
} = require("../../helpers/messages");

describe("Validations helper", () => {
  describe("Method: validateStage", () => {
    it("Not plain object", () => {
      expect(() => {
        validateStage("");
      }).to.throw(Error, notPlainObject);
    });

    it("Plain object with a number of keys different to 1", () => {
      expect(() => {
        validateStage({});
      }).to.throw(Error, notMongoStage);

      expect(() => {
        validateStage({ field1: "", field2: "" });
      }).to.throw(Error, notMongoStage);
    });

    it("Is valid stage", () => {
      expect(() => {
        validateStage({ $match: { _id: "" } });
      }).not.to.Throw(Error);
    });
  });

  describe("Method: isPlainObject", () => {
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
