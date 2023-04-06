//권희경

function solution(n) {
  let reverseNum = n.toString(3).split("").reverse().join("");
  return parseInt(reverseNum, 3);
}

// 멋진 reduce 풀이
function solution(n, numbers = []) {
  while (n) numbers.push(n % 3), (n = parseInt(n / 3));
  return numbers.reduce(
    (X, Y, Z, $) => X + Y * Math.pow(3, $.length - Z - 1),
    0
  );
}
