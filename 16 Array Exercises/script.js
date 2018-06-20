function printReverse(array) {
    // array.reverse();
    // array.forEach(element => {
    //     console.log(element);
    // });
    for (var i = (array.length - 1); i >= 0; i--) {
        console.log(array[i]);
    }
}
function isUniform(array) {
    for (var i = 1; i < array.length; i++) {
        if (array[0] !== array[i]) {
            return false;
        }
    }
    return true;
}
function sumArray(array) {
    var sum = 0;
    array.forEach(element => {
        sum += element;
    });
    return sum;
}
function max(array) {
    var max = 0;
    array.forEach(element => {
        if (max < element) {
            max = element;
        }
    });
    return max;
}