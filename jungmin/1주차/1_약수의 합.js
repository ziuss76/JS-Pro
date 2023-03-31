// 약수의 합
// 주석으로 여러분의 이름과 코드, 해설을 꼭 적어주세요!
function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) { // n의 약수를 구하는 반복문
      if (n % i === 0) {
          answer += i;  // 구한 약수를 모두 더하는 식
      }
  }
  return answer;
}