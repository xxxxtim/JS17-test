const { countOfBacterial } = require('./t14-module');

describe('請輸入細菌數和時間，計算細菌總數', function () {
    it('countOfBacterial(4,10) equalTo (4)', function () {
        expect(countOfBacterial(4, 10)).toBe(4);
    })
    it('countOfBacterial(20,20) equalTo (40)', function () {
        expect(countOfBacterial(4, 10)).toBe(4);
    })
    it('countOfBacterial(3,120) equalTo (192)', function () {
        expect(countOfBacterial(3, 120)).toBe(192);
    })
})//deacribe