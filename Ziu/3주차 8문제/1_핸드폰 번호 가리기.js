function solution(phone_number) {
    return '*'.repeat(phone_number.length - 4) + phone_number.slice(-4)
}
// 뒷 자리 4개 제외한 수 만큼 별 찍기 + -4 인덱스부터 끝까지 slice
// 사실 폰넘버 원본 데이터를 수정 안하려고 [...phone_number].slice(-4).join('') 했었는데
// slice 는 원본 수정 X, splice 는 원본 수정 O
// 웬만하면 slice 쓰쟈