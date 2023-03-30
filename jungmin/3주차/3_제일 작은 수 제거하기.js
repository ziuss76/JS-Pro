// 1. 주어진 배열의 길이가 1인 경우 최소값을 제외하면 길이가 0이 되기 때문에 먼저 -1을 리턴해준다.
// 2. 최솟값을 구한다.
// 3. 배열을 반복하며 최솟값을 제외해준다.

function solution(arr) {
  if (arr.length === 1) return [-1]
  
  let min = Math.min.apply(null, arr)
  
  return arr.filter(num => num !== min)
}