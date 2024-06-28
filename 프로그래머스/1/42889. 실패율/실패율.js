function solution(N, stages) {
    var answer = [];
    let participant = 0;
    let total = 0;
    let result = 0;
    stages.sort((a,b) => a - b);
    for(let i = 1; i <= N; i++) {
        for(let j = 0; j < stages.length; j++) {
            if(i === stages[j]){
                participant++;
            }
            if(i <= stages[j]) { 
                total++;
            }
        }
        result = participant / total;
        answer.push(result);
        participant = 0;
        total = 0;
    }
    failStage = answer.map((value, i) => [value,i + 1])
    failStage.sort((a,b) => b[0] - a[0]);
    const sortFail = failStage.map((value) => value[1])
    return sortFail;
}