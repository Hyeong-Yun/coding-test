function solution(str, t) {
  let count = 0;
  str.split("").forEach((element) => {
    if (element === "R") {
      count++;
    }
  });
  return count;

  // let count = str.split(t).length - 1;
  // return count;
}

console.log(solution("COMPUTERPROGRAMMING", "R"));
