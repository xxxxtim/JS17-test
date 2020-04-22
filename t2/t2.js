// 使用者輸入兩個整數，將它們分別除以 3 ，判斷餘數是否相同，若相同，則於螢幕上顯示「餘數相同」。
var readline = require('readline');


var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const ifModEqual = require('./t2-module');
var checknumber = new RegExp("^([1-9][0-9]*){1,3}$");//輸入非0的正整數
var recursiveAsyncReadLine = function () {
    rl.question('請輸入第一個數字:', function (input1) {

        rl.question('請輸入第二個數字:', function (input2) {

            if (!checknumber.test(input1) || !checknumber.test(input2)) {
                recursiveAsyncReadLine();
                return;
            }
            console.log(ifModEqual(input1, input2));
            return rl.close();//不再詢問
        });
    });
};

recursiveAsyncReadLine();

