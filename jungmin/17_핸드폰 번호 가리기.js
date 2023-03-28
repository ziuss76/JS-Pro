// 1. 반복문을 통해 주어진 문자열의 0부터 뒤에서 4번째 까지의 길이만큼 *문자를만든다.
// 2. 주어진 문자열의 뒤에서 4번째 까지 문자열을 잘라서 더한다.

function solution(phone_number) {
  let answer = ""
  for (let i = 0; i < phone_number.length - 4; i++) {
      answer += '*'
  }
  answer += phone_number.slice(-4)
  return answer;
}