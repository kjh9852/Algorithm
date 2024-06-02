// 정수배열 array, 머쓱이의 키 height 머쓱이보다 키 큰 사람 수 return;

function solution(array, height) {
    var answer = 0;
    let result = array.filter((data) => data > height)
    answer = result.length;
    return answer;
}

solution([149, 180, 192, 170], 167)