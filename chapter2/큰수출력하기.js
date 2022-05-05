function solution(nums) {
  let prev = nums[0];
  let arr = [];

  for (let x of nums) {
    if (nums.indexOf(x) === 0) {
      arr.push(x);
    } else {
      if (prev < x) {
        arr.push(x);
      }
    }
    prev = x;
  }
  return arr;
}

console.log(solution([7, 3, 9, 5, 6, 12]));
