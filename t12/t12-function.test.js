const { isprime } = require('./t12-module');


describe('測試2到10中的所有質數', function () {
    it('input:2    output:yes', function () {
        expect(isprime(2)).toBeTruthy();
    })
    it('input:3    output:yes', function () {
        expect(isprime(3)).toBeTruthy();
    })
    it('input:4    output:no', function () {
        expect(isprime(4)).toBeFalsy();
    })
    it('input:5    output:yes', function () {
        expect(isprime(5)).toBeTruthy();
    })
    it('input:6    output:no', function () {
        expect(isprime(6)).toBeFalsy();
    })
    it('input:7    output:yes', function () {
        expect(isprime(7)).toBeTruthy();
    })
    it('input:8    output:no', function () {
        expect(isprime(8)).toBeFalsy();
    })
    it('input:9    output:no', function () {
        expect(isprime(9)).toBeFalsy();
    })
    it('input:10    output:no', function () {
        expect(isprime(10)).toBeFalsy();
    })
})//deacribe