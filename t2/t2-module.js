function ifModEqual(input1, input2) {
    input1 = Number(input1);
    input2 = Number(input2);
    var mod1 = (input1 % 3);
    var mod2 = (input2 % 3);

    if (mod1 === mod2) {
        var answer = "兩個數字餘數一樣,餘數=" + mod1;
        // console.log(`Answer：${answer}`);
        // return rl.close();//不再詢問
        return answer;
    }
    else if (mod1 !== mod2) {
        var answer = "兩個數字餘數不一樣";
        // console.log(`Answer：${answer}`);
        // recursiveAsyncReadLine();//再次詢問
        return answer;
    }


}//function

module.exports = ifModEqual;