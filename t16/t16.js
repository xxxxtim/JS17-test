// 運用Caesar cipher: 明文中的所有字母加密，自訂一個平移參數。
// 讓使用者輸入 5 個字母，字每向後平移 3 個數，印出加密結果

const { isLowerCase, isUpperCase,
    uppercase1, lowercase1 } = require('./t16-module');

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



var recursiveAsyncReadLine = function () {
    var inputenglishname = new RegExp("^[a-zA-Z]+$");//only input eng
    var coefficient = new RegExp("^([1-9][0-9]*){1,3}$");//輸入非零的正整數
    var record1 = [];
    var record2 = "";//global var
    var ch = "";

    rl.question('請輸入5個英文字:', function (input1) {
        rl.question('請輸入平移係數:', function (input2) {

            if (!inputenglishname.test(input1) || (!coefficient.test(input2))) {
                recursiveAsyncReadLine();
                return;
            }

            record1 = input1.split(""); // ["a", "b", "c"]
            if (record1[5]) {
                recursiveAsyncReadLine();
                return;
            }
            record2 = record1.map(letter => {
                // letter  = "a"
                letter = letter.charCodeAt();//字母轉換為數字
                if (isUpperCase(letter)) {
                    return uppercase1(input2, letter);//進行平移並對應英文
                }
                else if (isLowerCase(letter)) {
                    return lowercase1(input2, letter);
                }
                else {
                    return "Error"
                }
            })
            console.log(`顯示答案${record2}`);
            recursiveAsyncReadLine();
        });//input2
    });//input1
};

recursiveAsyncReadLine();
