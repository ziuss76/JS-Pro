//권희경

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  const w = "*".repeat(a) + "\n"; // 가로 별 모양
  console.log(w.repeat(b)); // 세로 모양; w(가로)에 세로 길이 만큼 repeat
});
