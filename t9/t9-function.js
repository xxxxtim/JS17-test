function sum(i) {
  const arr1 = [2, 3, 1, 7, 9];
  const arr2 = [8, 7, 9, 3, 1];
  var sum = [];
  sum[i] = arr1[i] + arr2[i];
  return sum[i];
}
module.exports = sum;
