function solution(arr) {
  let answer;
  answer = arr.filter((item, index) => {
    if (arr.indexOf(item) === index) return true;
    else return false;
  });
  return answer;
}

console.log(solution(["good", "time", "good", "time", "student"]));
