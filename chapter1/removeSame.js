function solution(str) {
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === i) answer += str[i];
  }

  // for (let x of str) {
  //   if (!answer.includes(x)) {
  //     answer += x;
  //   }
  // }

  return answer;
}

console.log(solution("ksekkset"));
