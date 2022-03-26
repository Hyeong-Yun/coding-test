function solution(str) {
  let count = 0;
  for (let x of str) {
    x.charCodeAt();
    if (x === x.toUpperCase()) {
      count++;
    }
  }
  return count;
}

console.log(solution("KoreaTimeGood"));
