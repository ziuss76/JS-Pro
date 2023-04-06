function solution(arr){
    return arr.filter((a,i)=> a !== arr[i+1]);
}
// 그 다음 것과 같지 않은 인접한 요소만 필터 함수로 리턴
