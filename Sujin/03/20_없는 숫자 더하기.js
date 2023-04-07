function solution(numbers) {
  let map = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  numbers.forEach((value) => {
    if (map.includes(value)) {
      const delIdx = map.indexOf(value);

      map.splice(delIdx, 1);
    }
  });

  return map.reduce((sum, cur) => sum + cur, 0);
}
