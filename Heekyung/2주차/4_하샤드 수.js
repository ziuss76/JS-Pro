function solution(x) {
  var answer = true;
  sumX = [...String(x)].map(Number).reduce((a, b) => (a += b));
  if (x % sumX !== 0) {
    answer = false;
  }
  return answer;
}
