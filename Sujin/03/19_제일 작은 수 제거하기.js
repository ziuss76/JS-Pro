function solution(arr) {
  if (arr.length === 1) return [-1];

  const minNum = +Math.min(...arr);

  arr.splice(arr.indexOf(minNum), 1);

  return arr;
}
