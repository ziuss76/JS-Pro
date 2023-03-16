// [20230315] 김영채
function solution(s){
  // 문자열 내 모든 알파벳을 소문자로 변환하는 str.toLowerCase()
  const lowerStr = s.toLowerCase();
  let pCnt = 0;
  let yCnt = 0;
  // 소문자문자열 내 요소가 p이면 pCnt += 1; y이면 yCnt += 1;
  for (let i = 0; i < lowerStr.length; i++) {
    if (lowerStr[i] === 'p') pCnt += 1;
    else if (lowerStr[i] === 'y') yCnt += 1;
  }
  // pCnt와 yCnt가 같으면 true, 다르면 false
  if (pCnt === yCnt) return true;
  else return false;
}