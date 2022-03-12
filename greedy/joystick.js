function solution(name) {
  let answer = 0;
  const array = name.split("");

  array.map((item) => {
    const AToItem = Math.abs("A".charCodeAt() - item.charCodeAt());
    const ZToItem = Math.abs("Z".charCodeAt() - item.charCodeAt()) + 1;

    if (AToItem <= ZToItem) {
      answer += AToItem;
    } else {
      answer += ZToItem;
    }
  });

  array.map((item) => {
    if (item === "A") {
    } else {
    }
  });

  return answer;
}

console.log(solution("JEROEN"));
