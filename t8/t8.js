// 試寫一程式，讓使用者輸入一正整數n值,並撰寫一遞迴函數 function  divi(n) 
// 來求算當 n 值不斷除以 3 時，最少要除多少次，小數點後第 2 位會等於 0。

const resultOfDivide3 = require('./t8-module');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var checknumber = new RegExp("^[1-9]+$");//輸入非0的正整數

var recursiveAsyncReadLine = function () {
    rl.question('請輸入非零的正整數:', function (inputNumber) {
        var timesOfDivide = 0;
        if (!checknumber.test(inputNumber)) {
            recursiveAsyncReadLine();
            return;
        }
        else {
            const answer = resultOfDivide3(inputNumber, timesOfDivide);
            console.log(`timesOfDivide:${answer.timesOfDivide}`);
            console.log("顯示數字%f", answer.num);
        }
        rl.close();//不再詢問
    });
};

recursiveAsyncReadLine();


