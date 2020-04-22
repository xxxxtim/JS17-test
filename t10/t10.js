//宣告一整數陣列 array = [3,50,0,13,2,4,11] 
//試寫一程式，印出陣列中所包含的質數以及其索引值
const isprime = require('./t10-module');
const array = [3, 50, 0, 13, 2, 4, 11];
main(array);

function main(array) {
    for (let i = 0; i < array.length; i++) {
        let input = array[i];
        if (isprime(input)) {
            console.log(`array[${i}]=${input}`);
        }

    }//for

    // var answer = array.filter(isprime);//map寫法
    // console.log(answer);
}



