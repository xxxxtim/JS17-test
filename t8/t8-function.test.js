const mod = require('./t8-module');
describe('輸入數值除以3取餘數到小數點第2位', function () {
    it('input:100  output: 3.7  timesOfDivide: 3', function () {
        const case1 = mod("100", 0);
        expect(Number(case1.num)).toBeCloseTo(3.70);
        expect(Number(case1.timesOfDivide)).toBe(3);
    })
    it('input:12  output: 4  timesOfDivide: 1', function () {
        const case2 = mod("12", 0);
        expect(Number(case2.num)).toBeCloseTo(4.0);
        expect(Number(case2.timesOfDivide)).toBe(1);
    })

})//deacribe