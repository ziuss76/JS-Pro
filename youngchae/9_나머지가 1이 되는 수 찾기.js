// [20230320] 김영채
function solution(n) {
  //1부터 n까지의 숫자 중 n을 나눠서 나머지가 1인 수를 리턴한다.
  for (let x = 1; x <= n; x++) {
    if (n % x === 1) {
      return x;
    }
  }
}