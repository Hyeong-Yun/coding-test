function solution(citations) {
  let arr = citations.sort((a, b) => b - a);
  let HIndex = 0;

  while(HIndex <= arr[HIndex]){
    HIndex++;
  }
  
  return HIndex;
}

const citations = [3, 0, 6, 1, 5];
console.log(solution(citations))