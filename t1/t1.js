var readline = require('readline');


var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const ifPlayMovie = require('./t1-module');

var recursiveAsyncReadLine = function () {
    rl.question('請輸入此場看電影的人數:', function (input) {
        try {
            const num_input = Number(input)

            if (Number.isNaN(num_input)) {
                throw Error('Answer:白痴喔！不要亂打')
            }
            var numberOfPeople = parseInt(input, 10);
            // var type;
            answer = ifPlayMovie(numberOfPeople);
            console.log(`Answer：${answer}`);
            rl.close;
        } catch (e) {
            console.log(e.message);
            recursiveAsyncReadLine();
        }
    });
};

recursiveAsyncReadLine();
