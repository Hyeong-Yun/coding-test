// a,b,c 세수 중 최댓값 찾기

let a = 6,
  b = 5,
  c = 11;

let max = -Infinity;
console.log(max);

if (a < b) {
  max = b;
} else {
  max = a;
}

if (max < c) {
  max = c;
}

console.log(max);
