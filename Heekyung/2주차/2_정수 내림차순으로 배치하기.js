function solution(n) {
  let answer = Number([...String(n)].sort().reverse().join(""));
  //[...String(n)] = .toString.split('')
  //.sort()는 문자열 오름차순 정렬, 내림차순을 위해서 .reverse()사용
  return answer;
}
