function solution(array, commands) {
  let answer = [];
  // const start = commands[0];
  // const end = commands[1];
  commands.map((command, index) =>{
    const start = command[0];
    const end = command[1];
    const findItemNumber = command[2] -1;

    let item =  array.slice(start-1, end).sort(((a,b)=>a-b))[findItemNumber];
    answer.push(item);
  })

  return answer;
}

const array = [1, 5, 2, 6, 3, 7, 4]
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]

console.log(solution(array, commands));
console.log([1,10,101,61,45].sort())