function solution(a, b, c, d) {
    let result = 0;
    const dice = [a,b,c,d].sort((a,b) => b - a)
    const count = {};
    dice.forEach(value => {
         count[value]  = (count[value] || 0) + 1;
    })
    const key = Object.keys(count).map(Number);
    const value = Object.values(count);
    console.log(key,value)
    if(value.length === 1) {
        result = key[0] * 1111
    }else if (value.length === 2) {
        if(value.includes(3)) {
            const threeFindValue = key[value.indexOf(3)];
            const singleValue = key[value.indexOf(1)];
           result = (10 * threeFindValue + singleValue) ** 2;
         } else {
             result = (key[0] + key[1]) * Math.abs(key[0] - key[1])
         }
    } if(value.length === 3) {
        const twoFindValue  = key[value.indexOf(2)];
        const singleValue = key.filter((num,index) => value[index] === 1);
        result = singleValue[0] * singleValue[1]
    } else if (value.length === 4) {
        result = key[0]
    }
    return result;
}