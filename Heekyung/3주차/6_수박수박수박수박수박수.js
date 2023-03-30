//권희경

function solution(n) {
  var answer = "";

  if (n % 2 === 0) {
    answer = "수박".repeat(n / 2); //짝수일 경우 "박"으로 끝난다.
  } else {
    answer = "수박".repeat((n - 1) / 2) + "수"; // 홀수일 경우 "수"로 끝난다.
  }

  return answer;
}
