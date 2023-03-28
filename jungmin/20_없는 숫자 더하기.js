// 1. 1부터 주어진 배열내의 최대 값인 9까지 반복한다.
// 2. 반복하면서 배열내의 숫자가 없다면 더해준다.

function solution(numbers) {
  let answer = 0;
  for (let i = 1; i <= 9; i++) {
      if (!numbers.includes(i)) answer += i
  }
  return answer;
}