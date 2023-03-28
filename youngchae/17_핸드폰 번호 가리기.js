// [20230327] 김영채

function solution(phone_number) {
  let answer = '';
  // phone_number length - 4 만큼 '*' 추가하기
  answer += '*'.repeat(phone_number.length - 4);
  // 마지막 4자리 추가하기
  answer += phone_number.slice(-4);
  return answer;
}