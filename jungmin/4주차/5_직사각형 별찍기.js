// 1. 주어진 수 a만큼 가로길이의 별을 만든다.
// 2. 주어진 수 b만큼 세로길이의 별을 만든다.

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    let star = '*'.repeat(a)
    console.log((star + '\n').repeat(b))
});