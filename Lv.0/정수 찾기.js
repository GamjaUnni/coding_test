function solution(num_list, n) {
    // let answer = 0;
    // for (let i = 0; i < num_list.length; i++) {
    //     if (num_list[i] === n) {
    //         answer = 1;
    //     }
    // }
    // return answer;
    return num_list.indexOf(n) > -1 ? 1 : 0;
}

console.log(solution([1, 2, 3, 4, 5], 3));
