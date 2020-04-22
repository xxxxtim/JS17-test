// 找出10~20的質數，並列出前述各質數在1~100的倍數
const { isprime, multiple } = require('./t12-module');
var recordOfPrime = [];
for (let rangeOfInput = 10; rangeOfInput <= 20; rangeOfInput++) {

    if (isprime(rangeOfInput)) {
        recordOfPrime.push(rangeOfInput);
    }
}//input:10to20

for (let k = 0; k < recordOfPrime.length; k++) {
    console.log(`recordOfPrime[${k}]=${recordOfPrime[k]}`);

}//print all if the prime

multiple(recordOfPrime);






