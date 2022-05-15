function solution(str) {
  let mid = Math.ceil(str.length / 2); //홀수 5

  if (str.length % 2 === 0) {
    return str.substring(mid - 1, mid + 1);
  } else {
    return str.substring(mid - 1, mid);
  }
}

console.log(solution("study"));
