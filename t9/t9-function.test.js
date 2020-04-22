const sum = require('./t9-function');

describe('sum of two array', function () {
  it('sum[0,1,2,3,4] equalTo 10)', function () {
    expect(sum(0)).toBe(10);
    expect(sum(1)).toBe(10);
    expect(sum(2)).toBe(10);
    expect(sum(3)).toBe(10);
    expect(sum(4)).toBe(10);
  })
})//deacribe
