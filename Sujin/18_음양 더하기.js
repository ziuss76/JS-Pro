function solution(absolutes, signs) {
  return absolutes.reduce((sum, value, idx) => {
    // if (signs[idx]) sum += value;
    // else sum -= value;

    signs[idx] === true ? (sum += value) : (sum -= value);

    return sum;
  }, 0);
}
