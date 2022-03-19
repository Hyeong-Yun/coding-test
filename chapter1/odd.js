function solution(arr) {
  const result = arr.filter((item) => {
    if (item % 2 !== 0) {
      return item;
    }
  });
  console.log(result);
  return Math.min(...result);
}

console.log(solution([12, 77, 38, 41, 53, 92, 85]));
