// 1. 반복문을 통해 놀이기구의 총 이용금액을 구한다.
// 2. 총 이용금액에서 가지고 있는 금액을 빼준 값을 반환한다.
// 3. 가지고 있는 금액과 총 이용금액이 같거나, 가지고 있는 금액이 더 크가면 0을 반환한다.

function solution(price, money, count) {
  let total = 0;
  
  for (let i = 1; i <= count; i++) {
      total += price * i
  }
  
  if (money >= total) return 0
  return total - money
}