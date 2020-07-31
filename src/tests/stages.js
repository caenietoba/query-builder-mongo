const { expect } = require("chai");
const { clearStagesStore, createStageInStore, getStageInStore, getStagesStore } = require("../stages");

describe("Stage store manage", () => {
  const testData = {
    single: {
      path: "testPath",
      data: { test: "" },
    },
    multiple: {
      path: "testPath.dot1.dot2",
      data: { test: "" },
      resultData: { testPath: { dot1: { dot2: { test: "" } } } },
    },
    multiple2: {
      path: "testPath.dot1.dot2",
      data: { testReplaced: "" },
      resultData: { testPath: { dot1: { dot2: { testReplaced: "" } } } },
    },
  };

  describe("createStage", () => {
    it("Create stage without dot notation path", () => {
      createStage(testData.single.path, testData.single.data);
      expect(getStages()).to.be.eql({
        [testData.single.path]: testData.single.data,
      });
      clearStages();
    });

    it("Create a stage with dot notation path", () => {
      createStage(testData.multiple.path, testData.multiple.data);
      expect(getStages()).to.be.eql(resultData);
      clearStages();
    });

    it("Add an array as a stage in the stages store", () => {
      /* TODO: */
    });

    it("Replace an existing stage in the stages store", () => {
      createStage(testData.multiple.path, testData.multiple.data);
      createStage(testData.multiple2.path, testData.multiple2.data);
      expect(getStages()).to.be.eql(testData.multiple2.resultData);
      clearStages();
    });
  });

  describe("getStages", () => {
    it("Get the stages Object", () => {
      expect(getStages()).to.be.eql({});
      createStage(testData.multiple.path, testData.multiple.data);
      expect(getStages()).to.be.eql(testData.multiple.resultData);
      clearStages();
    });

    it("Get a new Object each time", () => {
      expect(getStages()).to.not.be.equal(getStages());
    });
  });

  describe("clearStages", () => {
    it("Clear the stages store", () => {
      createStage(testData.multiple.path, testData.multiple.data);
      clearStages();
      expect(getStages()).to.be.eql({});
    });
  });

  describe("getStage", () => {
    it("Get an object in stored in the stages store", () => {
      /*TODO:*/
    });

    it("Get an array in stored in the stages store", () => {
      /*TODO:*/
    });

    it("Throw error if the path is not found in the stages store", () => {
      /*TODO:*/
    });
  });
});
