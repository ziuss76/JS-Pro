// [20230322] 김영채
function solution(num) {
  // num이 1인 경우 0 return
  if (num === 1) return 0;
  // 작업을 한 번 할 때마다 count++
  let count = 0;
  while (num !== 1 && count !== 500) {
    if (num % 2 === 0) num /= 2;
    else if (num % 2 !== 0) num = num * 3 + 1;
    count++;
  }
  // count가 500이면 return -1
  if (count === 500) return -1;
  else return count;
}