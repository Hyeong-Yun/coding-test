function solution(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  let answer = "";

  for (let x of arr) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }

  return answer;
}

console.log(solution(["teacher", "time", "student", "beautiful", "good"]));
