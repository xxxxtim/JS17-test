const oddCharactorOfInput = require('./t6-module');


describe('英文名字的奇數字元', function () {
    it('input:HuhULddG  output: HhLd', function () {
        expect(oddCharactorOfInput('HuhULddG')).toMatch(/HhLd/);
    })
    it('input:apple  output: ape', function () {
        expect(oddCharactorOfInput('apple')).toMatch(/ape/);

    })
})//deacribe