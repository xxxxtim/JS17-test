// 好想健身房新開幕，每期會費500元，
// 第一期79折，每滿五期再折200元，
// 請讓使用者自行輸入所需期數，並利用do while計算，印出總費用。

const costOfGym = require('./t11-module');
var readline = require('readline');


var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var checknumber = new RegExp("^([1-9][0-9]*){1,3}$");//輸入非0的正整數

var recursiveAsyncReadLine = function () {
    rl.question('請輸入期數:', function (count) {
        // let i = 0;
        // let cost = 0;
        // let off = 0;
        // off = Math.floor(count / 5);

        if (!checknumber.test(count)) {
            recursiveAsyncReadLine();
            return;
        }
        else {
            cost = costOfGym(count);
        }//else
        console.log("總花費金額=%d", cost);
        rl.close();//不再詢問
    });
};

recursiveAsyncReadLine();