function solution(s) {
    return s.length % 2 ? s[parseInt(s.length / 2)]
    : s[(s.length / 2) - 1] + s[s.length / 2]
}
// 2로 나눈 나머지 ? 가운데 글자 (길이 5 => 2.5에서 내림 => 2 => 세 번째)
// 나머지가 없으면 가운데 두 글자 (길이 4 => 2 - 1, 2 => 두 번째, 세 번째)
// substr => ECMA 표준언어에서 빠짐 부록에 있는 거라 공식적으로는 slice를 추천 한다고