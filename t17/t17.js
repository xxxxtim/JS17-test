const { priorityOfArray, candidate1, candidate2,
    candidate3, candidate4, countTicket } = require('./t17-module');

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var checknumber = new RegExp("^[0-9]*$");//輸入數字
var recursiveAsyncReadLine = function () {
    rl.question('請輸入票數1:', function (input1) {
        rl.question('請輸入票數2:', function (input2) {
            rl.question('請輸入票數3:', function (input3) {
                rl.question('請輸入票數4:', function (input4) {
                    if (!checknumber.test(input1) ||
                        !checknumber.test(input2) ||
                        !checknumber.test(input3) ||
                        !checknumber.test(input4)) {
                        recursiveAsyncReadLine();
                        return;
                    }
                    const ticketOfArray = [
                        input1, input2, input3, input4,
                        input1, input2, input3, input4,
                        input1, input2, input3, input4,
                        input1, input2, input3, input4,
                    ]
                    console.log("1號投票者的得票數=%d", (countTicket(ticketOfArray, priorityOfArray, candidate1)).reduce((acc, value) => acc + value));
                    console.log("2號投票者的得票數=%d", (countTicket(ticketOfArray, priorityOfArray, candidate2)).reduce((acc, value) => acc + value));
                    console.log("3號投票者的得票數=%d", (countTicket(ticketOfArray, priorityOfArray, candidate3)).reduce((acc, value) => acc + value));
                    console.log("4號投票者的得票數=%d", (countTicket(ticketOfArray, priorityOfArray, candidate4)).reduce((acc, value) => acc + value));
                    rl.close();
                });//input4
            });//input3
        });//input2
    });//input1
};
recursiveAsyncReadLine();








