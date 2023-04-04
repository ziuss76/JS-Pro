// [20230404] 김영채

function solution(price, money, count) {
  // sum은 count만큼 타기 위해 필요한 총 금액
  let sum = 0;
  // 1부터 count까지의 수를 price에 곱해 sum에 더해준다.
  for (let i = 1; i <= count; i++) {
    sum += price * i;
  }
  // sum이 money보다 작거나 같다면(금액이 부족하지 않다면) return 0
  if (sum <= money) return 0;
  // 금액이 부족하다면 sum - money 리턴
  else return sum - money;
}