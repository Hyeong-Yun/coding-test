function solution(a, b, c) {
  let max = -Infinity;
  let sum = a + b + c;

  if (a < b) {
    max = b;
  } else {
    max = a;
  }

  if (max < c) {
    max = c;
  }

  if (sum - max <= max) {
    return "No";
  } else {
    return "Yes";
  }
}

console.log(solution(13, 33, 17));
