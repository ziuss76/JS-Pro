// [20230404] 김영채

function solution(arr1, arr2) {
  // 바깥쪽 배열의 길이
  let outLength = arr1.length;
  // 안쪽 배열의 길이
  let inLength = arr1[0].length;
  
  let answer = [];
  // answer배열 내 안쪽 배열을 만들어 push하는 함수
  function pushArr(i) {
    let arr = [];
    // 같은 인덱스에 있는 값끼리 더해준다.
    for (let j = 0; j < inLength; j++) {
      arr.push(arr1[i][j] + arr2[i][j]);
    }
    // answer에 만들어진 배열을 push한다.
    answer.push(arr);
  }
  // pushArr(i) 함수를 바깥쪽 배열 길이만큼 실행한다.
  for (let i = 0; i < outLength; i++) {
    pushArr(i);
  }
  return answer;
}