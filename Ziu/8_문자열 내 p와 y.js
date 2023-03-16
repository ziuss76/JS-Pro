// 문자열 내 p와 y의 개수
// 주석으로 여러분의 이름과 코드, 해설을 꼭 적어주세요!
function solution(s){
    let pn = 0, yn = 0;
    for (let val of [...s]){
        if (val === 'p' || val === 'P') pn++;
        if (val === 'y' || val === 'Y') yn++;
    }
    return pn === yn ? true : false
}

// pn = p의 개수, yn = y의 개수
// 두 개가 같으면 true 아님 false
// 둘 다 0 인 초기값도 두 값이 같으니 true 뱉음