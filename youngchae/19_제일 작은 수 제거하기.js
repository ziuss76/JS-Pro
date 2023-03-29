// [20230328] 김영채

function solution(arr) {
  // arr.length가 1이면 [-1] return
  if (arr.length === 1) return [-1];
  // minIdx는 arr의 요소들 중 최소값의 인덱스
  let minIdx = arr.indexOf(Math.min(...arr));
  // arr에서 최소값을 삭제
  arr.splice(minIdx, 1);
  return arr;
}