function solution(arr, divisor) {
    let ans = arr.filter((x) => x % divisor === 0);
    return ans.length !== 0 ? 
        ans.sort((a,b) => a - b) : [-1]
}