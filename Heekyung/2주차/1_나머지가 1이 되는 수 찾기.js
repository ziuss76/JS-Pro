function solution(n) {
  var answer = 0;
  let x = 1;

  while (x++) {
    // x+1을 하고 시작
    if (n % x === 1) return x;
  }
}
