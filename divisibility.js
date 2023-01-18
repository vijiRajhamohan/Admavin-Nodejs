var ans = [],
ans1 = [],
ans2 = [],
ans3 = [];
 

function both(n1, n2) {
  for (i = n1; i <= n2; i++) {
      if (i % 3 === 0 && i % 5 === 0) ans.push(i);
  }

    return ans;
}

const res = both(10, 20);
console.log("divisible by both 3 and 5 ", res);

function eitherOr(n1, n2) {
    for (i = n1; i <= n2; i++) {
        if (i % 3 === 0 || i % 5 === 0) ans1.push(i);
    }

    return ans1;
}

const res1 = eitherOr(10, 20);
console.log("divisible by  3 or 5 ", res1);

function only3(n1, n2) {
    for (i = n1; i <= n2; i++) {
        if (i % 3 === 0 ) ans2.push(i);
    }

    return ans2;
}

const res2 = only3(10, 20);
console.log("divisible by  3 ", res2);

function only5(n1, n2) {
    for (i = n1; i <= n2; i++) {
        if ( i % 5 === 0) ans3.push(i);
    }

    return ans3;
}

const res3 = only5(10, 20);
console.log("divisible by  5 ", res3);
