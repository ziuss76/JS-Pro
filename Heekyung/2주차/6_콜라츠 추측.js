function solution(num) {
  var answer = 0;

  while (num !== 1) {
    //while문은 조건이 ture일때만 작동
    if (answer === 500) {
      // 실행횟수 초과 여부 확인
      answer = -1;
      break; //초과 시 종료
    }

    if (num % 2 === 0) {
      num /= 2;
    } else {
      num = num * 3 + 1;
    }
    answer++;
  }
  return answer;
}
