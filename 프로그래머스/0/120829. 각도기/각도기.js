function solution(angle) {
    var answer = 0;
    if(angle > 0 && angle <= 180) {
        if(angle > 0 && angle < 90) {
            return answer = 1;
        }
        if(angle === 90) {
            return answer = 2;
        }
        if(angle > 90 && angle < 180) {
            return answer = 3;
        }
        if(angle === 180) {
            return answer = 4;
        }
    } else {
        return;
    }
    return answer;
}