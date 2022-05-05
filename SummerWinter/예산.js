function solution(d, budget) {
  d = d.sort((a, b) => a - b);
  let sum = 0;
  let cnt = 0;
  for (let i = 0; i < d.length; i++) {
    sum += d[i];
    if (sum <= budget) {
      cnt++;
    } else {
      return cnt;
    }
  }

  return cnt;
}

console.log(solution([1, 3, 2, 5, 4], 9));
