function solution(arr) {
    var answer = [];
    for(let i = 0; i < arr.length; i++) {
        if(answer.length && answer[answer.length - 1] === arr[i]) {
            answer.splice(answer.length - 1)
        } else  {
            answer.push(arr[i])
        }
    }
    return answer.length ? answer : [-1];
}