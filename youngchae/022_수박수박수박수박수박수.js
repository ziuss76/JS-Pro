// [20230329] 김영채

function solution(n) {
  // n이 짝수면, '수박'을 n/2 회 반복
  if (n % 2 === 0) return '수박'.repeat(n / 2);
  // n이 홀수면, '수박'을 Math.floor(n/2) 회 반복 + '수'
  else return '수박'.repeat(Math.floor(n / 2)) + '수';
}