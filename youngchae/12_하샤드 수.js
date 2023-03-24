// [20230321] 김영채
function solution(x) {
  // numArr는 x의 각자리수를 담은 배열
  let numArr = x.toString().split('').map(e => Number(e));
  // sum은 각 자릿수의 합
  let sum = 0;
  for (let i = 0; i < numArr.length; i++) {
      sum += numArr[i];
  }
  // 하샤드 수 검사
  if (x % sum === 0) return true;
  else return false;
}