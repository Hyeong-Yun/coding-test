function solution(n, words) {
  let visited = [words[0]];
  let answer = [0, 0];

  for (let i = 1; i < words.length; i++) {
    if (!visited.includes(words[i]) && check(words[i - 1], words[i])) {
      visited.push(words[i]);
    } else {
      // let catchedPerson = i % n;
      // let number = Math.ceil((i + 1) / n);
      // answer = [catchedPerson, number];

      return [(i % n) + 1, parseInt(i / n) + 1];
    }
  }

  return answer;
}

function check(prev, now) {
  return prev.split("")[prev.length - 1] === now.split("")[0];
}

console.log(
  solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
);
