const {
    detectPrice,
    isFullPrice,
    isHalfPrice
} = require('./t3-module');



describe('判斷票價', function () {
    it('detectPrice(7,90) equalTo [400,200,]', function () {
        expect(detectPrice(7)).toBe(400);//system test
        expect(detectPrice(90)).toBe(200);//system test
    })
    it('isFullPrice(10) equalTo 1', function () {
        expect(isFullPrice(10)).toBeTruthy();//fullPrice test
    })
    it('isHalfPrice(3) equalTo 1', function () {
        expect(isHalfPrice(3)).toBeTruthy();//halfPrice test
    })

})//deacribe