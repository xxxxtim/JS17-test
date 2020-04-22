// 宣告兩個具有5個元素的整數陣列 arr1 和 arr2 ，並利用陣列設定初值的方式，將 arr1[0]~arr1[4] 分別設值為 2,3,1,7,9， arr2[0]~arr2[4] 分別設值為 8,7,9,3,1
// 將 arr1 與 arr2 兩陣列對應項相加，列印出相加後的陣列
const { arr1, arr2 } = require('./t9-module');

console.log("answer=%o", sumOfArray(arr1, arr2));


function sumOfArray(arr1, arr2) {
    // var sum = [];
    // for (let i = 0; i < 5; i++) {
    //     sum[i] = arr1[i] + arr2[i];
    //     console.log("sum[%d]=%d", i, sum[i]);
    // }
    return arr1.map((value, index) => value + arr2[index])


}//function



