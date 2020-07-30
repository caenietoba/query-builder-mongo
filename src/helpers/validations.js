const { errorMessages } = require("./messages");

/**
 * Looks if the object is a plain object.
 * @param {Object} o Object that want to be validated.
 * @returns {Boolean} true if is a plain object, false in other case.
 */
const isPlainObject = (o) =>
  Boolean(
    o &&
      o.constructor &&
      o.constructor.prototype &&
      o.constructor.prototype.hasOwnProperty("isPrototypeOf"),
  );

/**
 * Validate if a stage is a valid stage that can be added to the query builder.
 * @param {Object} stage Stage that wants to be validated.
 * @throws {Error} If the stage is not a plain object.
 * @throws {Error} If the stage is not a valid mongo stage.
 */
const validateStage = (stage) => {
  if (!isPlainObject(stage)) throw new Error(errorMessages.notPlainObject);
  if (Object.keys(stage).length !== 1)
    throw new Error(errorMessages.notMongoStage);
};

module.exports = { validateStage, isPlainObject };
