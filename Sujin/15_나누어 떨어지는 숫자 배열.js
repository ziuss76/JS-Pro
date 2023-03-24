function solution(arr, divisor) {
  var answer = [];

  answer = arr.filter((value) => value % divisor === 0).sort((a, b) => a - b);

  if (answer.length === 0) answer.push(-1);

  return answer;
}
