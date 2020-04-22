const { sumOfUmleven } = require('./t5-module');

describe('求算 2*4 + 4*6 + 6*8...+(n-2)*n，n最小為 4, 只會出現偶數', function () {

    it('input:6 output :32', function () {
        const case1 = sumOfUmleven(6);
        expect(case1.sum).toBe(32);
    })
    it('input:10 output :160', function () {
        const case2 = sumOfUmleven(10);
        expect(case2.sum).toBe(160);
    })
})//deacribe

