function umleven(input1, currentState, sum, displayOfAns, currentStateOfNum, nextStateOfNum) {
    var a = (input1 - 4) / 2;
    if (currentState <= a) {
        currentStateOfNum = (2 + 2 * currentState);
        nextStateOfNum = (4 + 2 * currentState);
        displayOfAns = displayOfAns + "+" + (currentStateOfNum + "*" + nextStateOfNum);
        sum = sum + (currentStateOfNum * nextStateOfNum);
        currentState = currentState + 1;
        // umleven(input1, count, sum, record, temp1, temp2);
        return umleven(input1, currentState, sum, displayOfAns, currentStateOfNum, nextStateOfNum);

    }//if
    else {
        return { sum, displayOfAns };
    }
}

function sumOfUmleven(input) {
    var currentState = 0;
    var sum = 0;
    var displayOfAns = "";
    var currentStateOfNum = 0;
    var nextStateOfNum = 0;
    var answer = umleven(input, currentState, sum, displayOfAns, currentStateOfNum, nextStateOfNum);
    // console.log(`Answer：${answer.displayOfAns}=${answer.sum}`);
    return {
        display: answer.displayOfAns,
        sum: answer.sum
    }
}

module.exports = {
    umleven, sumOfUmleven
}