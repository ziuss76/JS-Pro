//권희경

function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    //약수가 홀수인 경우는 오직 제곱근이 정수일때 뿐이다.
    if (Math.sqrt(i) % 1 === 0) {
      // 제곱근이 소수점 없는 수일 경우
      answer -= i;
    } else {
      answer += i;
    }
  }

  return answer;
}
