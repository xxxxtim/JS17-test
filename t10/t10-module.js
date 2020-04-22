function isprime(input) {
    var numberOfFactor = 0;
    for (var j = 2; j <= input; j++) {
        if ((input % j) === 0) {
            numberOfFactor = numberOfFactor + 1;
        }
    }//for
    if (numberOfFactor === 1) {
        return true;
    }
    else {
        return false;
    }
}//function
module.exports = isprime




