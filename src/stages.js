const { errorMessages } = require("./helpers/messages");

/**
 * Store for the stages.
 */
let stages = {};

/**
 * Persist a stage in stages over the path in dot notation. If the path already exists it will replace
 * the stage in it.
 * @param {String} path Path that will has the stage.
 * @param {[Object]|Object} stage Stage that will be added to the stages.
 */
const createStage = (path, stage) => {
  path.split(".").reduce((acc, actual, i, arr) => {
    return (acc[actual] = arr[i + 1] ? acc[actual] || {} : stage);
  }, stages);
};

/**
 * Get a copy of the stages store.
 * @returns {Object} The stages store.
 */
const getStages = () => {
  return Object.assign({}, stages);
};

/**
 * Clear the stages store.
 */
const clearStages = () => {
  stages = {};
};

/**
 * Get a stage in the stages store.
 * @param {*} path Path of the stage that will be brought.
 * @returns {[Object]|Object} The stage in the path.
 * @throws {Error} In case that the path is not found in the stages store.
 */
const getStage = (path) => {
  return path.split(".").reduce((acc, actual) => {
    if (!acc[actual]) throw new Error(errorMessages.pathNotFound);
    return acc[actual];
  }, stages);
};

/**
 * Print the stages over a oath in the stages store. If path null the it will print all the store.
 * @param {String} path Path that wants to be printed. Default null.
 */
const printStages = (path = null) => {
  let stage = null;
  try {
    stage = JSON.stringify(path ? getStage(path) : getStages(), undefined, 2);
  } catch (error) {
    stage = {};
  } finally {
    console.log(stage);
  }
};

module.exports = {
  clearStages,
  createStage,
  getStages,
  getStage,
  printStages,
};
