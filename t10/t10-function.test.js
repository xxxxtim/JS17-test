const isprime = require('./t10-module');

describe('測試輸入數值是否為質數', function () {
    it('input:3  output:yes', function () {
        expect(isprime(3)).toBeTruthy();
    })
    it('input:50  output:no', function () {
        expect(isprime(50)).toBeFalsy();
    })
    it('input:0  output:no', function () {
        expect(isprime(0)).toBeFalsy();
    })
    it('input:13  output:yes', function () {
        expect(isprime(13)).toBeTruthy();
    })
    it('input:2  output:yes', function () {
        expect(isprime(2)).toBeTruthy();
    })
    it('input:4  output:no', function () {
        expect(isprime(4)).toBeFalsy();
    })
    it('input:11  output:yes', function () {
        expect(isprime(11)).toBeTruthy();
    })
})//deacribe