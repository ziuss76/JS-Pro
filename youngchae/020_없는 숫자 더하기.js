// [20230328] 김영채

function solution(numbers) {
  let answer = 0;
  // 0부터 9까지의 숫자들 중 numbers에 포함되어 있는 수는 answer에 더한다.
  for (let i = 0; i < 10; i++) {
      if (!numbers.includes(i)) answer += i;
  }
  return answer;
}