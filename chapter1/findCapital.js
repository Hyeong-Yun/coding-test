function solution(str) {
  let count = 0;
  for (let x of str) {
    // x.charCodeAt();
    // A-65, a -97
    if (x === x.toUpperCase()) {
      count++;
    }
  }
  return count;
}

console.log(solution("KoreaTimeGood"));
