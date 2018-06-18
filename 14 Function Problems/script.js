function isEven(num) {
    return num % 2 === 0;
}
function factorial(num) {
    var answer = 1;
    if (num === 0) {
        return answer;
    }
    for (num; num > 0; num--) {
        answer = num * answer;
    }
    return answer;
}
function kebabToSnake(string) {
    return string.replace("-","_");
}