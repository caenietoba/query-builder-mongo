const { errorMessages } = require("./helpers/messages");

/**
 * Store for the stages.
 */
let stagesStore = {};

/**
 * Persist a stage in the stages store over the path in dot notation. If the path already exists it will replace
 * the stage in it.
 * @param {String} path Path that will has the stage.
 * @param {[Object]|Object} stage Stage that will be added to the stages store.
 */
const createStageInStore = (path, stage) => {
  path.split(".").reduce((acc, actual, i, arr) => {
    return (acc[actual] = arr[i + 1] ? acc[actual] || {} : stage);
  }, stagesStore);
};

/**
 * Get a copy of the stages store.
 * @returns {Object} The stages store.
 */
const getStagesStore = () => {
  return Object.assign({}, stagesStore);
};

/**
 * Clear the stages store.
 */
const clearStagesStore = () => {
  stagesStore = {};
};

/**
 * Get a stage in the stages store.
 * @param {String} path Path of the stage that will be brought.
 * @returns {[Object]|Object} The stage in the path.
 * @throws {Error} In case that the path is not found in the stages store.
 */
const getStageInStore = (path) => {
  return path.split(".").reduce((acc, actual) => {
    if (!acc[actual]) throw new Error(errorMessages.pathNotFound);
    return acc[actual];
  }, stagesStore);
};

/**
 * Print the stages over a path in the stages store. If path null then it will print all the store.
 * @param {String} path Path that wants to be printed. Default null.
 */
const printStages = (path = null) => {
  let stage = null;
  try {
    stage = JSON.stringify(path ? getStageInStore(path) : getStagesStore(), undefined, 2);
  } catch (error) {
    stage = {};
  } finally {
    console.log(stage);
  }
};

module.exports = {
  clearStagesStore,
  createStageInStore,
  getStagesStore,
  getStageInStore,
  printStages,
};
