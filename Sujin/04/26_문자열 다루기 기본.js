function solution(s) {
    const diff = [...s].filter((v) => !(v >= '0' && v <= '9'));

    if (!diff.length && (s.length === 4 || s.length === 6)) return true;
    else return false;
}
