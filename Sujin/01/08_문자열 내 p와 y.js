// 문자열 내 p와 y의 개수
// 주석으로 여러분의 이름과 코드, 해설을 꼭 적어주세요!

function solution(s){
    var answer = true;

    let [cntP, cntY] = [0, 0]; // 구조 분해 할당
    
    s = s.toLowerCase();
    for (const v of s) {
        if (v === "p")
            cntP++;
        else if (v === "y")
            cntY++;
    }
    
    if (cntP !== cntY)
        answer = false;
    return answer;
}
