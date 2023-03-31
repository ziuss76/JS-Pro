// 1. 배열 arr를 순회하면서 5로 나눴을 때 나머지가 0인 수를 구한다.
// 2. 만약 배열 내에 5로 나누어 떨어지는 수가 하나도 없다면 배열에 -1을 담아 리턴한다.
// 3. 배열을 오름차순으로 정렬한 후 리턴한다. 

function solution(arr, divisor) {
  let answer = arr.filter(num => num % divisor === 0)
  if (answer.length === 0 ) answer.push(-1)  
  return answer.sort((a, b) => a - b)
}