function solution(arr) {
  let answer;
  answer = arr.filter((item, index) => {
    // if (arr.indexOf(item) === index) return true;
    // else return false;
    return arr.indexOf(item) === index;
  });

  return answer;
}

console.log(solution(["good", "time", "good", "time", "student"]));
