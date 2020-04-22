// 寫一個遞迴函數 function umleven(n) 來求算 2*4 + 4*6 + 6*8...+(n-2)*n
// (n最小為 4, 只會出現偶數)

const { umleven, sumOfUmleven } = require('./t5-module');

var readline = require('readline');


var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var recursiveAsyncReadLine = function () {
    rl.question('請輸入數字:', function (input) {
        input = Number(input);

        var mod = (input % 2);

        if (isNaN(input) || (input < 4) || (mod === 1)) {
            console.log('Answer:白痴喔！不要亂打');
            recursiveAsyncReadLine();//重新輸入
            return;
        }//去除字元,小於4,奇數

        else if ((input >= 4) || (mod === 0)) {
            const ansOfObj = sumOfUmleven(input);
            console.log(`Answer：${ansOfObj.display}=${ansOfObj.sum}`);

        }


    });

};

recursiveAsyncReadLine();



// function sumOfUmleven(input) {
//     var currentState = 0;
//     var sum = 0;
//     var displayOfAns = "";
//     var currentStateOfNum = 0;
//     var nextStateOfNum = 0;
//     var answer = umleven(input, currentState, sum, displayOfAns, currentStateOfNum, nextStateOfNum);
//     // console.log(`Answer：${displayOfAns}=${sum}`);
//     console.log(`Answer：${answer.displayOfAns}=${answer.sum}`);
// }
// function umleven(input, currentState, sum, displayOfAns, currentStateOfNum, nextStateOfNum) {
//     var a = (input - 4) / 2;
//     if (currentState <= a) {

//         currentStateOfNum = (2 + 2 * currentState);
//         nextStateOfNum = (4 + 2 * currentState);

//         displayOfAns = displayOfAns + "+" + (currentStateOfNum + "*" + nextStateOfNum);
//         sum = sum + ((2 + 2 * currentState) * (4 + 2 * currentState));
//         currentState = currentState + 1;
//         umleven(input, currentState, sum, displayOfAns, currentStateOfNum, nextStateOfNum);
//         return (displayOfAns, sum);


//     }

//     console.log(`Answer：${displayOfAns}=${sum}`);
// }//function