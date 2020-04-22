function ifPlayMovie(numberOfPeople) {
    if (numberOfPeople > 0) {
        var answer = "放電影囉~"
        return answer;

    }
    else if (numberOfPeople <= 0) {
        var answer = "沒人啦，不爽放電影";
        return answer;
    }
}

module.exports = ifPlayMovie;


