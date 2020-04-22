const { costOfGym, } = require('./t11-module');


describe('請輸入期數並判斷花費', function () {
    it('costOfGym(1,5,7) equalTo (395,2195,3195)', function () {
        expect(costOfGym(1)).toBe(395);
        expect(costOfGym(5)).toBe(2195);
        expect(costOfGym(7)).toBe(3195);
    })
})//deacribe