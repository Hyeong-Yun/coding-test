function solution(n, edge) {
  let answer = 0;
  return bfs(edge, 1, n);
}

function bfs(arr, start, end) {
  let visited = new Array(end + 1);
  let level = new Array(end + 1);
  let queue = [start];

  level[0] = 0;
  level[start] = 0;
  visited[start] = true;

  let lev;
  while (queue.length) {
    let node = queue.shift();
    lev = level[node] + 1;
  }
}

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
);
