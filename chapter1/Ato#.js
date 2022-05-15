function solution(str) {
  str = str.split("").map((item) => {
    if (item === "A") {
      return "#";
    }
    return item;
  });

  return str.join("");

  // str = str.replace(/A/g, "#");
  // return str;
}

console.log(solution("BANANA"));
