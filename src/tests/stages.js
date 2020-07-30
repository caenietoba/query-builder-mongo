const { expect } = require("chai");
const { createStage, getStages, clearStages } = require("../stages");

describe("stages", () => {
  describe("createStage", () => {
    it("Create a new stage", () => {
      createStage("newPath", { $match: "" });
      expect(getStages()).to.be.eql({ newPath: { $match: "" } });
      clearStages();
    });

    it("Create a new stage when path doesn't exist", () => {
      createStage("lvl1.lvl2.lvl3", { $match: "" });
      expect(getStages()).to.be.eql({
        lvl1: { lvl2: { lvl3: { $match: "" } } },
      });
      clearStages();
    });

    it("Replace stage", () => {
      createStage("lvl1.lvl2.lvl3", { $match: "" });
      createStage("lvl1.lvl2.lvl3", { replaced: "" });
      expect(getStages()).to.be.eql({
        lvl1: { lvl2: { lvl3: { replaced: "" } } },
      });
      clearStages();
    });
  });

  describe("getStages", () => {
    it("Get the stages", () => {
      expect(getStages()).to.be.eql({});
      createStage("lvl1.lvl2.lvl3", { $match: "" });
      expect(getStages()).to.be.eql({
        lvl1: { lvl2: { lvl3: { $match: "" } } },
      });
      clearStages();
    });

    it("Get a new Object each time", () => {
      expect(getStages()).to.not.be.equal(getStages());
    });
  });

  describe("clearStages", () => {
    it("Clear the stage", () => {
      createStage("lvl1.lvl2.lvl3", { $match: "" });
      clearStages();
      expect(getStages()).to.be.eql({});
    });
  });
});
