function solution(phone_number) {
  let answer = '*'.repeat(phone_number.length - 4);

  answer += phone_number.substr(phone_number.length - 4, 4);

  return answer;
}
