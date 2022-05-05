function solution(w, h) {
  let g = 1;
  for (let i = 2; i <= Math.min(w, h); i++) {
    if (w % i === 0 && h % i === 0) {
      g = i;
    }
  }
  return w * h - (w + h - g);
}

console.log(solution(8, 12));
