function solution(a, b) {
  if (a === b) {
    return a;
  } else {
    let sum = 0;

    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
      sum += i;
    }
    return sum;
  }
}
