function string(set, k) {
    let n = set.length;
    stringRec(set, "", n, k);
}
function stringRec(set, prefix, n, k) {
    if (k == 0) {
        document.write(prefix + "<br>");
        return;
    }
    for (let i = 0; i < n; ++i) {
        let newPrefix = prefix + set[i];
        stringRec(set, newPrefix, n, k - 1);
    }
}
document.write("Three-Letter Strings<br>");
let set1 = [3, 2, 1];
let k = 3;
string(set1, k);
