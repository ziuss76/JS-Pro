// 약수의 합
function solution(n) {
  var answer = 0;
  let maxN = n/2; // 2로 나눠 반복 횟수를 감소시켰다. (1을 제외한 약수가 될 수 있는 수중 가장 작은 수)
  
  answer += n 
  
for (let i = 1; i <= maxN; i++) {
      if( n % i === 0) { 
        answer += i
      }
}
  return answer;
}
// 주석으로 여러분의 이름과 코드, 해설을 꼭 적어주세요!
//권희경