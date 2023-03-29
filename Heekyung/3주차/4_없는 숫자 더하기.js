//권희경

function solution(numbers) {
  var answer = 0;
  let sum0to9 = 0;

  for (i = 0; i <= 9; i++) {
    //0~9의 합
    sum0to9 += i;
  }

  let sumNumbers = numbers.reduce((a, b) => a + b); // numbers의 합

  answer = sum0to9 - sumNumbers; //0~9까지 없는 수의 합을 구하는 것이기 때문에...

  return answer;
}
