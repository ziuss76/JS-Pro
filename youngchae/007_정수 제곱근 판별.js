// [20230315] 김영채
function solution(n) {
  // 제곱근을 반환하는 메서드 Math.sqrt()
  const x = Math.sqrt(n);
  // 제곱근 x가 양수일 경우 : x > 0
  // 제곱근 x가 정수의 경우 : x - Math.floor(x) === 0
  // ex) x가 정수가 아니라면 1.12343455 - 1 !== 0 이므로 return -1
  if (x > 0 && x - Math.floor(x) === 0) return (x + 1) ** 2;
  else return -1;
}