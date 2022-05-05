function solution(numbers, target) {
  let answer = 0;
  dfs(0, 0);

  //재귀를 활용한 DFS
  function dfs(sum, index) {
    if (index === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }
    dfs(sum + numbers[index], index + 1);
    dfs(sum - numbers[index], index + 1);
  }

  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
