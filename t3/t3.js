// 好想樂園的門票一張400元，優惠6歲(含)以下的孩童和65歲(含)以上的老人半價
// 試用「邏輯運算子」寫一程式，讓使用者自行輸入年齡，並判斷門票價錢。
var readline = require('readline');


var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const { isHalfPrice, isFullPrice, } = require('./t3-module');

var recursiveAsyncReadLine = function () {
    rl.question('請輸入年齡:', function (input) {
        // var age = parseInt(input, 10);
        var age = Number(input);

        const ticket_price = 400;



        if (Number.isNaN(age) || (age < 0)) {
            // console.log(isNaN(age));
            console.log('Answer:白痴喔！不要亂打');
            recursiveAsyncReadLine();
            return;

        }


        if (isHalfPrice(age)) {
            var answer = "年齡:" + age + ",票價：" + (ticket_price / 2);
        }
        else if (isFullPrice(age)) {
            var answer = "年齡:" + age + ",票價：" + (ticket_price);
        }

        console.log(`Answer：${answer}`);
        rl.close();//不再詢問
    });
};

recursiveAsyncReadLine();
