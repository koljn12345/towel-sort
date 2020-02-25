
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let result = [];
  if (matrix) {
    matrix.map((el, i) => {
      if (i % 2 === 0) result = result.concat(...el);
      else result = result.concat(...el.reverse());
    })
  }
  return result;
}
