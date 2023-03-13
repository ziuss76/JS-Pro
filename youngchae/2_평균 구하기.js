function solution(arr) {
  let sum = 0;
  // arr의 모든 원소의 합을 구한 후
  for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
  }
  // 합을 원소 개수로 나눈 값을 리턴
  return sum / arr.length;
}