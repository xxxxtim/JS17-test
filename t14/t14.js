// 細菌實驗中，原有 b隻細菌，每經過20分鐘細菌數量會增加為原來的2倍(2b)
// 試寫一遞迴函數function twofold(b, m) 。
// 讓使用者輸入分鐘數 m，並計算在沒有細菌死亡的狀況下，m 分鐘後的細菌有幾隻。
const { countOfBacterial } = require('./t14-module');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var time = new RegExp("^([1-9][0-9]*){1,3}$");//輸入非零的正整數
var checknumber = new RegExp("^[0-9]+(.[0-9]{1,3})?$");//1-3為小數的正實數

var recursiveAsyncReadLine = function () {
    rl.question('請輸入細菌數:', function (numofbac) {
        rl.question('請輸入分鐘數:', function (minutes) {

            if (!checknumber.test(numofbac) || !time.test(minutes)) {
                recursiveAsyncReadLine();
                return;
            }

            else {
                numofbac = countOfBacterial(numofbac, minutes);
                console.log(`細菌總數量：${numofbac}`);
                rl.close();//不再詢問

            }


        });
    });
};

recursiveAsyncReadLine();

