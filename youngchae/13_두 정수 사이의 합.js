// [20230322] 김영채
function solution(a, b) {
  let min;
  let max;
  // a와 b가 같으면 아무거나 리턴
  // 둘중 큰 수는 max, 작은 수는 min에 할당
  if (a === b) return a;
  else if (a > b) { 
    min = b;
    max = a;
  } else {
    min = a;
    max = b;
  }
  // min부터 max까지의 합 리턴
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}