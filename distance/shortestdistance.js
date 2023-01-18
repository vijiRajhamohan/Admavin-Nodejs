function binomialCoeff(n, k) {
  var res = 1;
  var i;

  if (k > n - k) k = n - k;

  for (i = 0; i < k; ++i) {
    res *= n - i;
    res /= i + 1;
  }

  return res;
}

function countPaths(x1, y1, x2, y2) {
  var m = Math.abs(x1 - x2);

  var n = Math.abs(y1 - y2);

  return binomialCoeff(m + n, n);
}

var x1 = 2,
  y1 = 3,
  x2 = 4,
  y2 = 5;
document.write(countPaths(x1, y1, x2, y2));
