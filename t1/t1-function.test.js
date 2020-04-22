const ifPlayMovie = require('./t1-module');


// test('判斷是否播放電影', () => {
//     expect(ifPlayMovie(1)).toBeTruthy();
//     expect(ifPlayMovie(0)).toBeFalsy();
//     expect(ifPlayMovie(-1)).toBeFalsy();

// });


describe('判斷是否播放電影', function () {
    it('入場人數超過一人，就播放電影', function () {
        expect(ifPlayMovie(1)).toMatch(/放電影囉~/);
    })
    it('入場人數0人，就不播放電影', function () {
        expect(ifPlayMovie(0)).toMatch(/沒人啦，不爽放電影/);
    })

})//deacribe
