function solution(x) {
    let sum = [...String(x)].reduce((a,c)=> a + +c, 0);
    return (x % sum === 0) ? true : false;
}
// sum = x의 자릿수의 합
// x를 sum 으로 나누고 나머지 0 ? true : false 리턴