//권희경

function solution(phone_number) {
  var answer = "*".repeat(phone_number.length - 4); // 뒷번호 4자리를 제외한 크기만큼 * 생성
  answer += phone_number.slice(-4); // 뒤에서부터 4번째 값부터 끝까지 값을 모두 가져옴
  return answer;
}
