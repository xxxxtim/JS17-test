function oddCharactorOfInput(input) {
    var arrayOfInput = [];
    arrayOfInput = input.split("");
    var arrayOfOddChactor = arrayOfInput.filter((value, index) => {
        return (index % 2 === 0)
    })
    var answer = arrayOfOddChactor.join();
    return answer;
}
module.exports = oddCharactorOfInput
