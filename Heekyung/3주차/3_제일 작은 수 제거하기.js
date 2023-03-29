//권희경

function solution(arr) {
  var answer = [];
  
  if(arr.length <=1) return [-1] // 빈배열 여부 
  
  let min = arr.reduce((a,b)=> a > b ? b : a); //최소값
  let minLocation = arr.indexOf(min); // 최소값 위치
  answer = arr.filter((num) =>num > arr[minLocation]) // 최소값 제거

  return  answer
}