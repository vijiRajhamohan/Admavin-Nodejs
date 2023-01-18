var arr1 = [
  8, 7, 9, 6, 5, 6, 6, 5, 6, 4, 6, 7, 8, 5, 4, 3, 2, 1, 4, 5, 6, 7, 8, 7, 8,
];

var arr2 = [
  2, 4, 5, 6, 7, 6, 7, 8, 9, 8, 7, 6, 7, 6, 5, 4, 3, 2, 3, 4, 5, 5, 5, 4, 5,
];

function arrayMaxMin(array, array1) {
  minNumber = Math.min(...array);
  maxNumber = Math.max(...array1);

  const nextArr1 = [
    ...array.slice(0, array.indexOf(minNumber)),
    maxNumber,
    ...array.slice(array.indexOf(minNumber) + 1),
  ];
  const nextArr2 = [
    ...array1.slice(0, array1.indexOf(maxNumber)),
    minNumber,
    ...array1.slice(array1.indexOf(maxNumber) + 1),
  ];
  maxArray1 = Math.max(...nextArr1);
  maxArray2 = Math.max(...nextArr2);
  const ans = maxArray1 * maxArray2;
  return ans;
}
const res = arrayMaxMin(arr1, arr2);
console.log(res);
