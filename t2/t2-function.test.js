const ifModEqual = require('./t2-module');

describe('判斷2種Case是否true', function () {
    it('輸入數字34, 89 回傳 兩個數字不一樣', function () {
        expect(ifModEqual(34, 89)).toMatch(/兩個數字餘數不一樣/);
    })
    it('輸入數字9, 3 回傳 兩個數字餘數一樣,餘數=0', function () {
        expect(ifModEqual(12, 9)).toMatch(/兩個數字餘數一樣,餘數=0/);
    })


})//deacribe

