function solution(n, lost, reserve) {
  let studentNum = n - lost.length;

  lost = lost
    .sort((a, b) => a - b)
    .filter((lostItem) => {
      if (reserve.includes(lostItem)) {
        studentNum++;
        reserve = reserve.filter((reserveItem) => lostItem !== reserveItem);
        return null;
      } else {
        return lostItem;
      }
    });
    
  if (studentNum !== n) {
    lost.map((lostNumber) => {
      if (reserve.includes(lostNumber - 1)) {
        reserve = reserve.filter((item) => item !== lostNumber - 1);
        studentNum++;
      } else if (reserve.includes(lostNumber + 1)) {
        reserve = reserve.filter((item) => item !== lostNumber + 1);
        studentNum++;
      }
    });
  }

  return studentNum;
}

console.log(solution(5, [ 4], [1]));
