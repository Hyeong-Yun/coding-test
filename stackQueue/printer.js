function solution(priorities, location) {
  let max;
  let cnt = 0;

  while (priorities.length > 0) {
    max = Math.max(...priorities);
    let n = priorities.shift();

    if (n === max) {
      cnt++;
      if (location === 0) {
        return cnt;
      }
    } else {
      priorities.push(n);
    }

    location--;
    
    if (location === -1) {
      location = priorities.length - 1;
    }
  }
}

console.log(solution([2, 1, 3, 2], 2));
