/**
 * Transform the entry to an array if is not already one.
 * @param {any|[any]} stage Object that will be transformed to an array.
 * @returns {[any]} The same object if it is already an array, or the object passed as parameter inside
 * an array in the position 0.
 */
const transformToArray = (stage) => {
  if (stage) return stage instanceof Array ? stage : [stage];
  return stage;
};

module.exports = { transformToArray };
