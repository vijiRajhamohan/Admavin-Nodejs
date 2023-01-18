const find_freq = (v, n) => {
  let mp1 = {},
    mp2 = {};
  let count1 = 0,
    count2 = 0;
  let flag = false;
  for (let i = 0; i < n; i++) {
    flag = true;
    for (let j = 0; j < v[i].length; j++) {
      if (v[i][j] >= "0" && v[i][j] <= "9") {
        flag = false;
        break;
      }
    }

    if (flag) {
      count1++;
      if (v[i] in mp1) mp1[v[i]] += 1;
      else mp1[v[i]] = 1;
    } else {
      count2++;
      if (v[i] in mp2) mp2[v[i]] += 1;
      else mp2[v[i]] = 1;
    }
  }
  document.write(
    `alphanumeric String: ${count1} <br/> numeric or String: ${count2}<br/>`
  );
};

let N = 5;
let arr = ["1234", "mak87s", "abcd", "kakjdj", "laojs7s6"];

find_freq(arr, N);
