


function isprime(rangeOfInput) {
    var NumOfFactor = 0;
    for (let j = 2; j <= rangeOfInput; j++) {
        if ((rangeOfInput % j) === 0) {
            NumOfFactor = NumOfFactor + 1;
        }
    }//for
    if (NumOfFactor === 1) {
        return true;
    }
    else {
        return false;
    }
}//function
function multiple(recordOfPrime) {
    var currentState;
    for (let m = 0; m < recordOfPrime.length; m++) {
        var answer = "";
        currentState = Math.floor(100 / recordOfPrime[m]);
        for (let k = 1; k <= currentState; k++) {
            answer = answer + " " + (recordOfPrime[m] * k);
        }
        console.log(`${recordOfPrime[m]}的倍數=${answer}`);
    }
}//function

module.exports = { isprime, multiple }