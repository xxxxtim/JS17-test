function resultOfDivide3(inputNumber, timesOfDivide) {
    var num = Number(inputNumber);
    // var stringOfNum;
    // var arrayOfAns = [];
    num = (num / 3).toString();//.toFixed(2);//擷取到小數點第2位


    if (num.includes(".") && num[num.indexOf(".") + 2] !== "0") {
        return resultOfDivide3(num, ++timesOfDivide);
    }
    else {
        return { timesOfDivide: ++timesOfDivide, num };
    }//else
}//function

module.exports = resultOfDivide3;