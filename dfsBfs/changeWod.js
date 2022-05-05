function solution(begin, target, words) {
  let answer = 0;
  let visited = [];
  let queue = [[begin, 0]];
  console.log(queue);

  while (queue.length > 0) {
    let [w, c] = queue.shift();
    if (w === target) return c;

    words.forEach((word) => {
      if (!visited.includes(word)) {
        if (checked(w, word)) {
          queue.push([word, ++c]);
          visited.push(word);
        }
      }
    });
  }

  return 0;
}

function checked(str1, str2) {
  let check = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) check++;
  }
  return check === 1;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
