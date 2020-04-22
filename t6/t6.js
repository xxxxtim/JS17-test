// 宣告陣列 name，讓使用者自行輸入四個英文名字於陣列中
// 輸出第一個和第三個名字的單數個字母

const oddCharactorOfInput = require('./t6-module');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var recursiveAsyncReadLine = function () {
    var inputenglishname = new RegExp("^[a-zA-Z]+$");//only input eng

    rl.question('請輸入第一個名字:', function (input1) {
        rl.question('請輸入第二個名字:', function (input2) {
            rl.question('請輸入第三個名字:', function (input3) {
                rl.question('請輸入第四個名字:', function (input4) {
                    if (!inputenglishname.test(input1)
                        || (!inputenglishname.test(input2))
                        || (!inputenglishname.test(input3))
                        || (!inputenglishname.test(input4))) {
                        recursiveAsyncReadLine();
                        return;
                    }
                    answer = oddCharactorOfInput(input1);
                    console.log("輸出第一個名字的奇數字元:%s", answer);
                    answer = oddCharactorOfInput(input3);
                    console.log("輸出第三個名字的奇數字元:%s", answer);
                    recursiveAsyncReadLine();
                });
            });
        });
    });
};

recursiveAsyncReadLine();

