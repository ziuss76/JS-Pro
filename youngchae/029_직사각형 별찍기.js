// [20230405] 김영채

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const n = data.split(" ");
  const a = Number(n[0]), b = Number(n[1]);
  // 별을 a회 반복하고 줄바꿈하기 * b회 반복
  console.log(
    ('*'.repeat(a) + '\n').repeat(b)
  );
});