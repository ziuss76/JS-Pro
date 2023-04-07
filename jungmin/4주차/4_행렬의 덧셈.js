// 1. 2중 반복문을 돌면서 arr1과 arr2의 배열의 같은 인덱스에 있는 값끼리 더해준다.

function solution(arr1, arr2) {
  let result = []
  for (let i = 0; i < arr1.length; i++) {
      let arr = []
      for (let j = 0; j < arr1[i].length; j++) {
          arr.push(arr1[i][j] + arr2[i][j])
      }
      result.push(arr)
  } 
  
  return result
}