const { getStageInStore } = require("./stages");
const { validateStage } = require("./helpers/validations");
const { transformToArray } = require("./helpers/transformations");

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
  push(...stages) {
    stages.forEach((stage) => {
      transformToArray(stage).forEach((_stage) => {
        validateStage(_stage);
        super.push(_stage);
      });
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

const qb = new QueryBuilder();
qb.push([{ $test: "" }], { $other: "" });
console.log(qb);

module.exports = QueryBuilder;
