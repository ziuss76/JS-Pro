// x만큼 간격이 있는 n개의 숫자
// 주석으로 여러분의 이름과 코드, 해설을 꼭 적어주세요!

// 1. 1부터 1씩 증가하며 n까지 반복한다.
// 2. 1씩 증가하는 n 값에 x를 곱해준다.

function solution(x, n) {
  let answer = [];
  
  for (let i = 1; i <= n; i++) {
      answer.push(x * i)
  }

  return answer;
}