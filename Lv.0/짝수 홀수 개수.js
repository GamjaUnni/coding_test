(function () {
    const num_list = [1, 2, 3, 4, 5];

    /*1*/
    /* 짝수, 홀수의 카운트를 셀 변수(num1, num2)를 선언하고 
            조건문에 따라 증가시킨뒤 배열에 값을 담아서 return 처리 */
    function solution1(num_list) {
        let num1 = 0;
        let num2 = 0;

        for (let i = 0; i < num_list.length; i++) {
            if (num_list[i] % 2 === 0) num1 += 1;
            else num2 += 1;
        }

        return [num1, num2];
    }

    /*2*/
    /* 1번과 유사하나 return전 초기에 선언한 answer배열에 push 후 리턴 

            - return answer.push(num1, num2)를 바로 하게 되면
            let length = answer.push(num1, num2)
            return length가 되므로 number형이 출력됨 */
    function solution2(num_list) {
        const answer = [];
        let num1 = 0;
        let num2 = 0;

        for (let i = 0; i < num_list.length; i++) {
            if (num_list[i] % 2 === 0) num1 += 1;
            else num2 += 1;
        }
        answer.push(num1, num2);
        return answer;
    }

    /*3*/
    /* 초기 선언한 answer의 인덱스에 각각 0으로 초기화를 해둔뒤 
            배열에 직접 카운트를 증가시키는 방식 */
    function solution3(num_list) {
        const answer = [0, 0];
        for (let i = 0; i < num_list.length; i++) {
            if (num_list[i] % 2 === 0) answer[0] += 1;
            else answer[1] += 1;
        }
        return answer;
    }

    console.log(solution1(num_list));
    console.log(solution2(num_list));
    console.log(solution3(num_list));
})();
