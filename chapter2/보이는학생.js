function solution(students) {
  let max = Number.MIN_SAFE_INTEGER;
  let count = 0;

  for (let x of students) {
    if (x > max) {
      max = x;
      count++;
    }
  }

  return count;
}

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]));
