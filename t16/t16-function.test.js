const { caesar } = require('./t16-module');

describe('測試偏移字母', function () {
    it('輸入z，偏移3，輸出c', function () {
        let case1 = caesar('z', 3);
        expect(case1[0]).toMatch(/c/);
    })
    it('輸入Z，偏移3，輸出C', function () {
        let case2 = caesar('Z', 3);
        expect(case2[0]).toMatch(/C/);
    })
    it('輸入A，偏移3，輸出D', function () {
        let case3 = caesar('A', 3);
        expect(case3[0]).toMatch(/D/);
    })
    it('輸入y，偏移6，輸出e', function () {
        let case4 = caesar('y', 6);
        expect(case4[0]).toMatch(/e/);
    })
})//deacribe