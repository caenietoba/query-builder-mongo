/**
 * Transform the entry to an array if is not already one.
 * @param {any|[any]} stage Object that will be transformed to an array.
 * @returns {[any]} The same object if it is already an array, or the object passed as parameter inside
 * an array in the position 0.
 */
const transformToArray = (stage) => {
  let stages = null;
  if (stage instanceof Array) stages = stage;
  else stages = [stage];
  return stages;
};

module.exports = { transformToArray };
