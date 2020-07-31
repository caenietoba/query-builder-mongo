const { createStageInStore, getStageInStore } = require("./stages");
const { validateStage } = require("./helpers/validations");
const { transformToArray } = require("./helpers/transformations");

/**
 * Add a stage to the query builder binded to the function.
 * @param {[Object]|Object} stage Stage or stages that will be added to the query builder.
 * @throws {Error} In case that the stage is not a valid stage.
 */
function addStage(stage) {
  let stages = transformToArray(stage);
  stages.forEach((_stage) => {
    validateStage(_stage);
    this.push(_stage);
  });
}

/**
 * Helper class to centralize the mongo aggregate pipeline stages to be reusable in an easy way allowing
 * to has custom stages that will be reusable over múltiple queries.
 */
class QueryBuilder extends Array {
  /**
   * Add a single or multiple stages to the query builder.
   * @param  {...any} stages Stage or stages that will be added to the query builder.
   * @returns {QueryBuilder} The query builder with the stage or stages added.
   */
  addStages(...stages) {
    stages.forEach((stage) => {
      addStage.bind(this)(stage);
    });
    return this;
  }

  /**
   * Get a stage in the stages Store with the path passed as parameter and added to the query builder,
   * in case that the path is not found it will throw and error.
   * @param {String} path Path that will be searched in the stages Store.
   * @returns {QueryBuilder} The query builder with the stage or stages added.
   * @throws {Error} If the path is not found.
   */
  getStage(path) {
    this.addStages(getStageInStore(path));
    return this;
  }
}

module.exports = QueryBuilder;
