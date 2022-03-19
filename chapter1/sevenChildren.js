function solution(array) {
  let sum = array.reduce((previous, current) => previous + current, 0);

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (sum - (array[i] + array[j]) === 100) {
        array.splice(i, 1);
        array.splice(j, 1);
      }
    }
  }

  return array;
}

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));
