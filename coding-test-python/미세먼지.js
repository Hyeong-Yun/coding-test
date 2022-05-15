function solution(atmos) {
  var answer = 0;
  let flag = 0;

  for (let i = 0; i < atmos.length; i++) {
    let dust = atmos[i][0];
    let microdust = atmos[i][1];

    if (dust > 80 || microdust > 35) {
      flag = i;
    }
  }

  return answer;
}

console.log(
  solution([
    [80, 35],
    [70, 38],
    [100, 41],
    [75, 30],
    [160, 80],
    [77, 29],
    [181, 68],
    [151, 76],
  ])
);
