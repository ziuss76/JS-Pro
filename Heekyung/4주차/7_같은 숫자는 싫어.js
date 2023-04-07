//권희경

function solution(arr) {
  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  let answer = [arr[0]];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (answer[j] !== arr[i]) {
      answer.push(arr[i]);
      j++;
    }
  }

  return answer;
}
