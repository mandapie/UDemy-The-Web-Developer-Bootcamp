function average(arr) {
    var sum = 0;
    for (var i in arr) {
        sum += arr[i];
    }
    var avg = Number ((sum/arr.length).toFixed());
    console.log(avg);
}

var scores = [90,98,89,100,100,86,94];
average(scores); //should return 94

var scores2 = [40,65,77,82,80,54,73,63,95,49];
average(scores2); //should nreturn 68