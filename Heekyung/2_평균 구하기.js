// 평균 구하기
function solution(arr) {
  let sumArr = 0;

  for (let i = 0; i < arr.length; i++) { //arr 안에 있는 약수의 총합
      sumArr += arr[i]
  }
  
   var answer = sumArr / arr.length ; //arr안 약수 갯수로 나눠 평균
  return answer;
}

//권희경