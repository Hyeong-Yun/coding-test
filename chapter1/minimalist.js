function solution(arr) {
  let min = Number.MAX_SAFE_INTEGER;
  console.log(min);
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  return min;
}

console.log(solution([5, 7, 1, 3, 2, 9, 11]));
